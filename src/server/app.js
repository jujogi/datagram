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
    resave: false,
    saveUninitialized: false,
    secret: 'datagram',
    cookie: {
        secure: false,
    }
}));

app.use("/auth", authRouter);
app.use("/api", scrapRouter);

app.get("/home", (req, res) => {    
    if(req.session.passport.user){
        const { accessToken } = req.session.passport.user;
        req.session.accessToken = accessToken;
        req.session.save();
    }
    const { accessToken } = req.session;
    res.status(200).send(accessToken);
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
