import express from "express";
import expressSession from "express-session";
import bodyParser from "body-parser";
import helmet from "helmet"
import cors from "cors";
import passport from "passport";
import authRouter from "./routes/auth.routes"
import scrapRouter from "./routes/scrap.routes"

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use(passport.initialize());
app.use(expressSession({
    resave: true,
    saveUninitialized: false,
    secret: 'datagram',
    cookie: {
        secure: false,
    }
}));

app.use("/auth", authRouter);
app.use("/api", scrapRouter);

app.get("/home", (req, res) => {    
    const { passport = { user: {} } } = req.session;

    if (passport.user && passport.user.accessToken) {
        const accessToken = passport.user.accessToken;
        req.session.accessToken = accessToken;
        req.session.save();
        res.cookie("graph_access_token", accessToken);
        res.status(200).send(accessToken);
    } else {
        res.status(500).send("Sorry, your accessToken is not available");
    }
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
