import axios from "axios";

const GRAPH_URL = "https://graph.facebook.com/v10.0";

const requestData = async options => {
    try {
        const { data } = await axios(options);
        return data;
    } catch (error) {
        throw error;
    }
};

export { GRAPH_URL, requestData };
