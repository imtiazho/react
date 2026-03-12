import axios from "axios";


const StaticDataLoader = async () => {
    const res = await axios.get("https://raw.githubusercontent.com/imtiazho/JsonData/refs/heads/main/bottles.json");
    return res;
};

export default StaticDataLoader;