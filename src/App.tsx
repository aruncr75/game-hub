import { Box, Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery { 
  genre: Genre | null;
  platform: Platform | null;
  // sortOrder: string;
  // searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) =>setGameQuery({...gameQuery,genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
  <PlatformSelector selectedPlatform ={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})} />
  <Box mt={4}> {/* Add margin-top for space */}
    <GameGrid gameQuery={gameQuery} />
  </Box>
</GridItem>

    </Grid>
  );
}

export default App;
