import { iGame } from "../services/rawg";
import useData from "./useData";

const useGames = () => useData<iGame>("/games");

export default useGames;
