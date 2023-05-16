import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

import { iGame, iFetchGamesResponse } from "../services/rawg";

const GameGrid = () => {
    const [games, setGames] = useState<iGame[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<iFetchGamesResponse>("/games")
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((err) => setError(err.message));
    }, []);

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
