import { HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const SHOW_ICON = false;

export function NavMenu({
  onClick = () => alert("hello"),
  showIcon = SHOW_ICON,
}) {
  return (
    <Box
      as="button"
      onClick={onClick}
      aria-label="Call Segun"
      alignItems="center"
      borderRadius="0"
      display="flex"
      fontSize="4xl"
      fontWeight="500"
      lineHeight="1"
      m="0"
      pointerEvents="auto"
    >
      {showIcon && <HamburgerIcon w={8} h={8} m="0" mr="4" />}[ Model & Year ]
    </Box>
  );
}
