import { Box, Avatar } from "@chakra-ui/react";
import { supabase } from "utils/supabase";
import { useAuth } from "./AuthContext/AuthContext";
import SupabaseLogin from "./SupabaseLogin";

export function Settings() {
  const { user } = useAuth();

  return !user ? (
    <Box pointerEvents="auto">
      <SupabaseLogin />
    </Box>
  ) : (
    <Box
      as="button"
      aria-label="Call Segun"
      onClick={() => supabase.auth.signOut()}
      alignItems="center"
      borderRadius="0"
      display="flex"
      fontSize="5xl"
      lineHeight="1"
      m="0"
      pl="8"
      pointerEvents="auto"
      pr="3"
    >
      <Avatar w="10" h="10" m="0" mr="5" border="3px solid black" />
    </Box>
  );
}
