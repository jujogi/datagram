import dotenv from "dotenv";
import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

dotenv.config();

const { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, CALLBACK_URL } = process.env;
console.log(FACEBOOK_CLIENT_ID);
const fbOptions = {
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
};

const facebookStrategy = new FacebookStrategy(
    fbOptions,
    async (accessToken, refreshToken, profile, done) => {
        console.log(accessToken, profile);
        //TODO: save accessToken
        // use accessToken to make calls
        // https://developers.facebook.com/docs/graph-api/reference/post
    }
);

passport.use(facebookStrategy);

export default passport.authenticate('facebook');