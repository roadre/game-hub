import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardPlaceholder from "./GameCardPlaceholder";
import GameCardContainer from "./GameCardContainer";
import { iGameQuery } from "../services/rawg";

interface Props {
    gameQuery: iGameQuery;
}

const ListGame = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);

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
