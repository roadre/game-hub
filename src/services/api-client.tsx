import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "7d0325dd8fb7461493ce4574be87fc49",
    },
});
