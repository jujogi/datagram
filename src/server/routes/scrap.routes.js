import { Router } from "express";
import { fanpageDetails } from "../controllers/fanpage.controller";

const router = Router();

router.get("/fanpage", fanpageDetails);

export default router;
