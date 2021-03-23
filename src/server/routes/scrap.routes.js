import { Router } from "express";
import { getFanpageDetails, getFanpagePosts } from "../controllers/fanpage.controller";

const router = Router();

router.get("/fanpage", getFanpageDetails);
router.get("/fanpage/posts", getFanpagePosts);

export default router;
