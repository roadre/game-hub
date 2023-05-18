import { iGame } from "../services/rawg";
import useData from "./useData";

const useGames = (Genre: number, selectPlatform: number) => {
    var query = { genres: null, parent_platforms: null };

    if (Genre > 0) {
        query.genres = Genre;
    }

    if (selectPlatform > 0) {
        query.parent_platforms = selectPlatform;
    }

    return useData<iGame>("/games", { params: query }, [Genre, selectPlatform]);
};

export default useGames;
