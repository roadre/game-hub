import React, { useEffect, useState } from "react";
import { iGame, iFetchGamesResponse } from "../services/rawg";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardPlaceholder from "./GameCardPlaceholder";

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={15}>
                <h1>List</h1>
                {isLoading &&
                    skeletons.map(() => (
                        <GameCardPlaceholder width="300px" height="400px" />
                    ))}
                {games.map((game) => (
                    <GameCard key={game.id} game={game}></GameCard>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
