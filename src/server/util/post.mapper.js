const postMapper = (post = {}) => {
    const {
        id,
        full_picture: picture,
        permalink_url: url,
        message = "Not message provided",
        created_time: creadtedAt = "yyyy/mm/dd",
        shares = { count: 0 }
    } = post;

    return {
        id,
        message: message,
        url,
        picture,
        createdAt: creadtedAt,
        metrics: {
            likes: post.like.summary.total_count || 0,
            love: post.love.summary.total_count || 0,
            haha: post.haha.summary.total_count || 0,
            wow: post.wow.summary.total_count || 0,
            sad: post.sad.summary.total_count || 0,
            angry: post.angry.summary.total_count || 0,
            shares: shares.count
        }
    };
};

export default postMapper;
