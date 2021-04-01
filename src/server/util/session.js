const AUTH_URL = [
    "/auth/facebook",
    "/auth/facebook/callback",
];

const validateSession = (req, res, next) => {
    const { session = {}, cookies = {} } = req;

    if (!req.url.includes(AUTH_URL)) {
        if (cookies.datagramAccessToken || session.passport){
            const token = cookies.datagramAccessToken ? cookies.datagramAccessToken : session.passport.user.accessToken;
            req.session.accessToken = token;
            req.session.save();

            if (!cookies.datagramAccessToken) {
                res.cookie('datagramAccessToken', token);
            }
            next();
        } else {
            res.redirect(AUTH_URL[0]);
        }
    }
};

export default validateSession;