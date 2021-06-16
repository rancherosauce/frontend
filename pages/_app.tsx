import { ThemeProvider } from "components/ThemeProvider";
import CustomHead from "components/CustomHead";
import NavigationOverlay from "components/NavigationOverlay";
import { AuthProvider } from "components/AuthContext/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider cookies={pageProps.cookies}>
      <AuthProvider>
        <CustomHead {...pageProps} />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
