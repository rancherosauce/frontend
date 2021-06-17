import { supabase } from "utils/supabase";
import { Box, Text } from "@chakra-ui/react";

export default function ProfilePage({ user }) {
  return (
    <Box>
      <Text strong>{user.email}</Text>
      <Text>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Text>
    </Box>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  // If there is a user, return it.
  return { props: { user } };
}
