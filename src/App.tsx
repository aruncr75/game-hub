import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}>
    <Grid
      templateAreas={{
        base: `"nav " "main"`, // 0px
        lg: `"nav nav " "aside main"`, // ~992px
      }}
    >
      <GridItem area="nav">
      <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg={"gold"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
