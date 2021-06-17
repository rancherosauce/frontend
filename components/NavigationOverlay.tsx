import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/system";

import Footer from "./Footer";
import Header from "./Header";

const SHOW_MASK = false;
const MASK_COLOR = "blackAlpha.200";

export default function Overlay() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      h="100%"
      templateRows="5rem 1fr 5rem"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      pointerEvents="none"
    >
      <GridItem
        colSpan={5}
        bg={SHOW_MASK ? MASK_COLOR : null}
        position="relative"
      >
        <Header />
      </GridItem>
      <GridItem colSpan={5} bg={SHOW_MASK ? MASK_COLOR : null} />
      <GridItem colSpan={5} bg={SHOW_MASK ? MASK_COLOR : null} />
    </Grid>
  );
}
