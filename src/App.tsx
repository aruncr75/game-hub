import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show
} from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";



function App() {

  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}>
    <Grid
      templateAreas={{
        base: `"nav " "main"`, // 0px
        lg: `"nav nav " "aside main"`, // ~992px
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingLeft={3} area="aside">
          <GenreList
          />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        padding={{ base: 3, lg: 0 }}
        paddingRight={{ base: 3, lg: 3 }}
      >
        <Box padding={0}>
          <GameHeading  />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector/>
          </Flex>
        </Box>

        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
