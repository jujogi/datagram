import { Router } from "express";
import { getFanpageDetails, getFanpagePosts } from "../controllers/fanpage.controller";
import { getPostDetails } from "../controllers/post.controller";

const router = Router();

router.get("/fanpage/:fanpageId", getFanpageDetails);
router.get("/fanpage/:fanpageId/posts", getFanpagePosts);

export default router;
