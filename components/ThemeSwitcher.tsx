import { useColorMode, Switch, Flex, Box } from "@chakra-ui/react";
import React from "react";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex position="fixed" top="1rem" right="1rem">
      <Box opacity={!isDark ? 1 : 0.4}>Work</Box>
      <Box px="3">
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Box>
      <Box opacity={isDark ? 1 : 0.3}>Play</Box>
    </Flex>
  );
};
