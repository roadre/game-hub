import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ListGame from "./components/ListGame";
import ListGenre from "./components/ListGenre";
import { useState } from "react";

function App() {
    const [SelectedGenre, setSelectedGenre] = useState(4);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar></NavBar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    {SelectedGenre ? (
                        <Button onClick={() => setSelectedGenre(0)}>
                            Reset {SelectedGenre}
                        </Button>
                    ) : (
                        ""
                    )}

                    <ListGenre onSelectGenre={setSelectedGenre}></ListGenre>
                </GridItem>
            </Show>
            <GridItem area="main">
                <ListGame SelectedGenre={SelectedGenre} />
            </GridItem>
        </Grid>
    );
}

export default App;
