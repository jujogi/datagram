import { Router } from "express";
import expressSession from "express-session";
import { authFacebook, authFacebookCallback } from "../strategies/facebook.strategy";

const router = Router();

router.get("/facebook", authFacebook);
router.get('/facebook/callback', authFacebookCallback);

export default router;
