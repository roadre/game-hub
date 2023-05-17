import { iGenre } from "../services/rawg";
import useData from "./useData";

const useGenres = () => useData<iGenre>("/genres");

export default useGenres;
