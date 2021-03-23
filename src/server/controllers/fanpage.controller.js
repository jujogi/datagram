import axios from "axios";

const GRAPH_URL = "https://graph.facebook.com/v10.0";
const FANPAGE = "5tarutacali"

const requestData = async (options) => {
    const { data } = await axios(options);
    return data;
};

const fanpageDetails = async (req, res) => {
    const { accessToken } = req.session;
    const options = {
        url: `${GRAPH_URL}/${FANPAGE}`,
        method: "get",
        params: {
            "access_token": accessToken,
            fields: "name,about,country_page_likes"
        },
    };
    try {
        const fanpage = await requestData(options);
        res.status(200).send(fanpage);
    } catch(error) {
        fanpageDetails();
    };
};

export {
    fanpageDetails
}