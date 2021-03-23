import axios from "axios";

const GRAPH_URL = "https://graph.facebook.com/v10.0";

const requestData = async (options) => {
    const { data } = await axios(options);
    return data;
};

export {
    GRAPH_URL,
    requestData
}