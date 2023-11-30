import { Box, Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatfom, setselectedPlatfom] = useState<Platform | null>(null);

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) =>setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
  <PlatformSelector selectedPlatform ={selectedPlatfom} onSelectPlatform={(platform)=>setselectedPlatfom(platform)} />
  <Box mt={4}> {/* Add margin-top for space */}
    <GameGrid selectedPlatform ={selectedPlatfom} selectedGenre={selectedGenre} />
  </Box>
</GridItem>

    </Grid>
  );
}

export default App;
