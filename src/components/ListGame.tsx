import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardPlaceholder from "./GameCardPlaceholder";
import GameCardContainer from "./GameCardContainer";

interface Props {
    selectedGenre: number;
    selectedPlatform: number;
}

const ListGame = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data, error, isLoading } = useGames(
        selectedGenre,
        selectedPlatform
    );

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }}>
                {isLoading &&
                    skeletons.map((id) => (
                        <GameCardContainer key={id}>
                            <GameCardPlaceholder />
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}></GameCard>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default ListGame;
