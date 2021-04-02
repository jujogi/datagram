import { Router } from "express";
import { getFanpageDetails, getFanpagePosts } from "../controllers/fanpage.controller";
import { getPostInfo } from "../controllers/post.controller";

const router = Router();

router.get("/fanpage/:fanpageId", getFanpageDetails);
router.get("/fanpage/:fanpageId/posts", getFanpagePosts);

router.get("/post/:postId", getPostInfo);

export default router;
