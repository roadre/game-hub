import React, { useEffect, useState } from "react";
import { iGame, iFetchGamesResponse } from "../services/rawg";
import useGames from "../hooks/useGames";

const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <div>
                <h1>List</h1>
                <ul>
                    {games.map((game) => (
                        <li key={game.id}>{game.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default GameGrid;
