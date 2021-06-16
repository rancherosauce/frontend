import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  Flex,
  IconButton,
  LinkBox,
  LinkOverlay,
  Avatar,
  Input,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";

import Logo from "./Logo/Logo";
import { GrSend } from "react-icons/gr";

export function AppMenu() {
  return (
    <Button
      h="100%"
      minWidth="6.5rem"
      pb="7"
      pl="5"
      onClick={() => alert("hello")}
      pointerEvents="auto"
      bg="transparent"
      borderRadius="0"
    >
      <Icon fill="none" viewBox="0 0 400 400" w={16} h={16}>
        <path
          fill="#000"
          fillRule="evenodd"
          d="M278.134 367.2V206.991h26.135V367.2h-26.135z"
          clipRule="evenodd"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M211.097 274.028h160.209v26.135H211.097v-26.135zm-178.427 74.3l136.164-136.165 18.48 18.481L51.15 366.808l-18.48-18.48z"
          clipRule="evenodd"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M51.205 212.163l136.164 136.165-18.48 18.48L32.724 230.644l18.48-18.481z"
          clipRule="evenodd"
        />
      </Icon>
    </Button>
  );
}
export function ChatWindow() {
  return (
    <Flex alignItems="center" alignContent="center">
      {/* <Input
        type="text"
        bg="white"
        borderRadius="0"
        fontSize="2xl"
        py={6}
        width="min(22rem, 40vw)"
        border="4px solid red"
        mr={5}
      /> */}
      <Button
        h="100%"
        minWidth="6.5rem"
        onClick={() => alert("hello")}
        pointerEvents="auto"
        bg="transparent"
        borderRadius="0"
      >
        <Icon as={GrSend} w={12} h={8} mx="3" />
      </Button>
    </Flex>
  );
}

export default function Footer() {
  return (
    <Flex
      justifyContent="space-between"
      position="relative"
      height="100%"
      width="100%"
    >
      <AppMenu />
      <ChatWindow />
    </Flex>
  );
}
