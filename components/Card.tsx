import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";

function Card() {
  return (
    <LinkBox as="article">
      <h2>
        <NextLink href="#" passHref>
          <LinkOverlay>Some blog post</LinkOverlay>
        </NextLink>
      </h2>
      <p>
        As a side note, using quotation marks around an attribute value is
        required only if this value is not a valid identifier.
      </p>
      <a href="#">Some inner link</a>
    </LinkBox>
  );
}
