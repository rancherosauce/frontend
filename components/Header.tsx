import { Flex } from "@chakra-ui/react";
import { NavMenu } from "./NavMenu";
import { Settings } from "./Settings";

export default function Header() {
  return (
    <Flex
      justifyContent="space-between"
      position="relative"
      height="100%"
      width="100%"
    >
      <NavMenu />
      <Settings />
    </Flex>
  );
}
