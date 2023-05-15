/* 

    API Module to the rawg Databse
    
*/

import apiClient from "./api-client";

interface iGame {
    id: number;
    name: string;
}

interface iFetchGamesResponse {
    count: number;
    results: iGame[];
}

class RawgClient {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
}

const createRawgClient = (endpoint: string) => {
    return new RawgClient(endpoint);
};

export default { createRawgClient };

export type { iGame, iFetchGamesResponse };
