import { GRAPH_URL, requestData } from "../util/index";
import generatePosts from "../util/generators";
import { getPostDetails } from "./post.controller";

const getFanpageDetails = async (req, res) => {
    const { accessToken } = req.session;
    const { fanpageId } = req.params;
    const options = {
        url: `${GRAPH_URL}/${fanpageId}`,
        method: "get",
        params: {
            access_token: accessToken,
            fields: "name,about,country_page_likes"
        }
    };
    try {
        const fanpage = await requestData(options);
        res.status(200).send(fanpage);
    } catch (e) {
        res.send(e);
    }
};

const getFanpagePosts = async (req, res) => {
    const { accessToken } = req.session;
    const { fanpageId } = req.params;
    const options = {
        url: `${GRAPH_URL}/${fanpageId}/posts`,
        method: "get",
        params: {
            access_token: accessToken,
            limit: 5
        }
    };

    try {
        const { data: posts } = await requestData(options);
        const allPosts = [];

        for (const post of posts) {
            console.log("loading info...");
            try {
                const postDetails = await getPostDetails(post.id, accessToken);
                allPosts.push(postDetails);
            } catch (e) {
                res.status(200).send(e.message);
            }
        }
        res.status(200).send(allPosts);
    } catch (e) {
        res.status(500).send(e);
    }
};

const mockPosts = async (req, res) => {
    const posts = generatePosts(10);
    res.status(200).send(posts);
};

export { getFanpageDetails, getFanpagePosts, mockPosts };
