import React, { useEffect, useState } from "react";
import { iGame, iFetchGamesResponse } from "../services/rawg";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";

const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={15}>
                <h1>List</h1>
                {games.map((game) => (
                    <GameCard key={game.id} game={game}></GameCard>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
