import { Router } from "express";
import { authFacebook, authFacebookCallback } from "../strategies/facebook.strategy";

const router = Router();

router.get("/facebook", authFacebook);

router.get('/facebook/callback', authFacebookCallback, (req, res) => {
    const { accessToken } = req.user;
    res.status(200).send(accessToken);

    //TODO: Store token!
    // use accessToken to make calls
    // https://developers.facebook.com/docs/graph-api/reference/post

});

export default router;
