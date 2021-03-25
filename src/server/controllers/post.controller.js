import { GRAPH_URL, requestData } from "../util/index";
import postMapper from "../util/post.mapper";

const getPostDetails = async (postId, accessToken) => {
    const options = {
        url: `${GRAPH_URL}/${postId}`,
        method: "get",
        params: {
            "access_token": accessToken,
            fields: "id,created_time,message,shares,permalink_url,full_picture,reactions.type(LIKE).limit(0).summary(1).as(like),reactions.type(LOVE).limit(0).summary(1).as(love),reactions.type(HAHA).limit(0).summary(1).as(haha),reactions.type(WOW).limit(0).summary(1).as(wow),reactions.type(SAD).limit(0).summary(1).as(sad),reactions.type(ANGRY).limit(0).summary(1).as(angry)"
        },
    };
    try {
        const details =  await requestData(options);
        return postMapper(details);
        
    } catch(error) {
        getPostDetails();
    };
};

export {
    getPostDetails
}