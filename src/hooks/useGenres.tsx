import React, { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import { iGenres, iFetchGeneresResponse } from "../services/rawg";
import { CanceledError } from "axios";

const useGenres = () => {
    const [Genres, setGenres] = useState<iGenres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);

        apiClient
            .get<iFetchGeneresResponse>("/genres", {
                signal: controller.signal,
            })
            .then((res) => {
                setGenres(res.data.results);
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

    return { Genres, error, isLoading };
};

export default useGenres;
