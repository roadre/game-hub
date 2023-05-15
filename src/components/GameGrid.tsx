import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

import { iGame, iFetchGamesResponse } from "../services/rawg";

const GameGrid = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<iFetchGamesResponse>("/games")
            .then((res) => {
                console.log(res.data.results);
            })
            .catch((err) => setError(err.message));
    }, []);

    return (
        <>
            {error && <p>{error}</p>}
            <div>GameGrid</div>
        </>
    );
};

export default GameGrid;
