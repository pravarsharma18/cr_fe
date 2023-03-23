import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={`"navbar navbar"
                      "sidebar main"`}
    >
      <GridItem area={"navbar"} padding={2}>
        <NavBar />
      </GridItem>
      <GridItem area={"sidebar"}>SideBar</GridItem>
      <GridItem area={"main"}>Main</GridItem>
    </Grid>
  );
}

export default App;
