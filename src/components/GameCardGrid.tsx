import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardPlaceholder from "./GameCardPlaceholder";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={15}>
                {isLoading &&
                    skeletons.map(() => (
                        <GameCardContainer>
                            <GameCardPlaceholder />
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game}></GameCard>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
