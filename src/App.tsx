import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ListGame from "./components/ListGame";
import ListGenre from "./components/ListGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { iGameQuery } from "./services/rawg";

function App() {
    const [gameQuery, setGameQuery] = useState<iGameQuery>({});
    // const [selectedGenre, setSelectedGenre] = useState(4);
    //const [selectedPlatform, setSelectedPlatform] = useState(1);

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
                    <ListGenre
                        onSelectGenre={(genre) =>
                            genre
                                ? setGameQuery({ ...gameQuery, genre })
                                : setGameQuery({ ...gameQuery, genre: null })
                        }
                        selectedGenre={gameQuery?.genre}
                    ></ListGenre>
                </GridItem>
            </Show>
            <GridItem area="main">
                <PlatformSelector
                    onSelectPlatform={(platform) =>
                        setGameQuery(
                            platform
                                ? { ...gameQuery, platform }
                                : { ...gameQuery, platform: null }
                        )
                    }
                    selectedPlatform={gameQuery.platform}
                ></PlatformSelector>
                <ListGame gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
