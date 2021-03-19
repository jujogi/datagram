import dotenv from "dotenv";
import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

dotenv.config();

const { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, CALLBACK_URL } = process.env;

const fbOptions = {
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
};

const facebookStrategy = new FacebookStrategy(
    fbOptions,
    async (accessToken, refreshToken, profile, done) => {
        try {
            const user = {
                id: profile.id,
                name: profile.displayName,
                accessToken,
            };
            return done(null, user);
        } catch (e){
            return done(null, false);
        }
    }
);

passport.use(facebookStrategy);

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

const authFacebook =  passport.authenticate('facebook');
const authFacebookCallback = passport.authenticate('facebook',
    {
        failureRedirect: "/login"
    });

export {
    authFacebook,
    authFacebookCallback
};