import { iGenre, iPlatform } from "../services/rawg";
import useData from "./useData";

const usePlatform = () => useData<iPlatform>("/platforms/lists/parents");

export default usePlatform;
