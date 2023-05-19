import { iGame, iGameQuery, iGameQueryRequest } from "../services/rawg";
import useData from "./useData";

const useGames = (gameQuery?: iGameQuery) => {
    var query: iGameQueryRequest = {};

    if (gameQuery?.genre?.id) {
        query.genres = gameQuery.genre.id + "";
    }

    if (gameQuery?.platform?.id) {
        query.parent_platforms = gameQuery?.platform?.id + "";
    }

    if (gameQuery?.order) {
        query.ordering = gameQuery?.order;
    }

    return useData<iGame>("/games", { params: query }, [gameQuery]);
};

export default useGames;
