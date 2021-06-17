import { useContext } from "react";
import { createContext, FunctionComponent, useEffect, useState } from "react";
import {
  User,
  Session,
  AuthChangeEvent,
  Provider,
  UserCredentials,
} from "@supabase/supabase-js";
import { useToast } from "@chakra-ui/react";
import { supabase } from "../../utils/supabase";

export type AuthContextProps = {
  user: User;
  testme: any;
  signUp: (payload: UserCredentials) => void;
  signIn: (payload: UserCredentials) => void;
  signInWithProvider: (provider: Provider) => Promise<void>;
  signOut: () => void;
  loggedIn: boolean;
  loading: boolean;
  userLoading: boolean;
};

export const ROUTE_HOME = "/";
export const ROUTE_AUTH = "/login";

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [loggedIn, setLoggedin] = useState(false);
  const toast = useToast();

  const signUp = async (payload: UserCredentials) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp(payload);
      if (error) {
        toast({ title: error.message, status: "error" });
      } else {
        toast({
          title: "Signup successful",
          description: "Please check your inbox for a confirmation email!",
          status: "success",
        });
      }
    } catch (error) {
      toast({
        title: error.error_description || error,
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (payload: UserCredentials) => {
    try {
      setLoading(true);
      const { error, user } = await supabase.auth.signIn(payload);
      if (error) {
        toast({ title: error.message, status: "error" });
      } else {
        toast({
          title: user
            ? `Welcome, ${user.email}`
            : `Please check your email for the magic link`,
          status: "info",
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: AuthContext.tsx ~ line 80 ~ signIn ~ error",
        error
      );
      // toast({
      //   title: error.error_description || error,
      //   status: "error",
      // });
    } finally {
      setLoading(false);
    }
  };

  const signInWithProvider = async (provider: Provider) => {
    await supabase.auth.signIn({ provider });
  };

  const signOut = async () => await supabase.auth.signOut();

  const setServerSession = async (event: AuthChangeEvent, session: Session) => {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  };

  useEffect(() => {
    const user = supabase.auth.user();

    if (user) {
      setUser(user);
      setUserLoading(false);
      setLoggedin(true);
      // Router.push(ROUTE_HOME);
    } else {
      setUserLoading(false);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const user = session?.user! ?? null;
        setUserLoading(false);
        await setServerSession(event, session);
        if (user) {
          setUser(user);
          setLoggedin(true);
          // Router.push(ROUTE_HOME);
        } else {
          setUser(null);
          // Router.push(ROUTE_AUTH);
        }
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        signInWithProvider,
        signOut,
        loggedIn,
        loading,
        userLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContext.Provider");
  }

  return context;
};
