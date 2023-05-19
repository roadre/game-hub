/* 

    API Module to the rawg Databse
    
*/

import apiClient from "./api-client";

interface iPlatform {
    id: number;
    name: string;
    slug: string;
}

interface iGame {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: iPlatform }[];
    metacritic: number;
}

interface iGenre {
    id: number;
    name: string;
    parent_platforms: { platform: iPlatform }[];
    metacritic: number;
    image_background: string;
}

interface iPlatform {
    id: number;
    name: string;
}

interface iFetchGenresResponse {
    count: number;
    results: iGenre[];
}

interface iFetchGamesResponse {
    count: number;
    results: iGame[];
}

interface iGameQuery {
    genre?: iGenre | null;
    platform?: iPlatform | null;
}

interface iGameQueryRequest {
    genres?: string | null;
    parent_platforms?: string | null;
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

export type {
    iGame,
    iFetchGamesResponse,
    iGenre,
    iFetchGenresResponse,
    iPlatform,
    iGameQuery,
    iGameQueryRequest,
};
