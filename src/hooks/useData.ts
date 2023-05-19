import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { AxiosRequestHeaders,AxiosRequestConfig } from "axios";

interface iFetchResponse<T> {
    count: number ;
    results: T[];
}

const useData = <T>(endpoint: string, params: AxiosRequestConfig = {}, deps : any[] = []) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        setIsLoading(true);

        apiClient
            .get<iFetchResponse<T>>(endpoint, { ...params, signal: controller.signal})
            .then((res) => {
                setData(res.data.results);
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
    },deps);

    return { data, error, isLoading };
};

export default useData;
