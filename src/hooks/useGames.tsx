import React, { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import { iGame, iFetchGamesResponse } from "../services/rawg";
import { CanceledError } from "axios";

const useGames = () => {
    const [games, setGames] = useState<iGame[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<iFetchGamesResponse>("/games")
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => {
            controller.abort();
        };
    }, []);

    return { games, error };
};

export default useGames;
