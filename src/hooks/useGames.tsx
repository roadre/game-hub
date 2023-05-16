import React, { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import { iGame, iFetchGamesResponse } from "../services/rawg";
import { CanceledError } from "axios";

const useGames = () => {
    const [games, setGames] = useState<iGame[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);

        apiClient
            .get<iFetchGamesResponse>("/games")
            .then((res) => {
                setGames(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, []);

    return { games, error, isLoading };
};

export default useGames;
