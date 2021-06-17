import { Box, Center, Grid } from "@chakra-ui/react";
import SupabaseLogin from "components/SupabaseLogin";
import React from "react";
import { supabase } from "utils/supabase";

export default function LoginPage() {
  return (
    <Center h="var(--100vh)">
      <SupabaseLogin />
    </Center>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  // Redirect to Login, if no user was found
  if (user) {
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
}
