import { Router } from "express";
import { getFanpageDetails, getFanpagePosts, mockPosts } from "../controllers/fanpage.controller";
import { getPostInfo } from "../controllers/post.controller";

const router = Router();

router.get("/fanpage/:fanpageId", getFanpageDetails);
router.get("/fanpage/:fanpageId/posts", getFanpagePosts);
router.get("/fanpage/:fanpageId/fake-posts", mockPosts);

router.get("/post/:postId", getPostInfo);

export default router;
