import { iGame } from "../services/rawg";
import useData from "./useData";

const useGames = (Genre: number) =>
    useData<iGame>("/games", Genre ? { params: { genres: Genre } } : {} , [
        Genre,
    ]);

export default useGames;
