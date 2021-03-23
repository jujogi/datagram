import { GRAPH_URL, requestData } from "../util/index"
import postMapper from "../util/post.mapper";
import { getPostDetails } from "./post.controller"

const FANPAGE = "5tarutacali"

const getFanpageDetails = async (req, res) => {
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
        getFanpageDetails();
    };
};

const getFanpagePosts = async (req, res) => {
    //TODO: Dinamyc fanpage ID
    const { accessToken } = req.session;
    const options = {
        url: `${GRAPH_URL}/${FANPAGE}/posts`,
        method: "get",
        params: {
            "access_token": accessToken,
            "limit": 5,
        },
    };
    try {
        const { data: posts } = await requestData(options);
        const postWithMetrics = [];

        for (const post of posts) {
            console.log("loading info...");
            try {
                const postMetrics = await getPostDetails(post.id, accessToken);
                const newPost = await postMapper(postMetrics);
                postWithMetrics.push(newPost);
            } catch(e){
                console.log(e)
            }
        }
        res.status(200).send(postWithMetrics);

    } catch(error) {
        getFanpagePosts();
    };
};

export {
    getFanpageDetails,
    getFanpagePosts
}