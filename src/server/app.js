import express from "express";
import expressSession from "express-session";
import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet"
import cors from "cors";
import passport from "passport";
import authRouter from "./routes/auth.routes";
import scrapRouter from "./routes/scrap.routes";
import validateSession from "./util/session";

const PORT = 3000;

const app = express();

app.use(json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
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

app.use("/api", validateSession, scrapRouter);
app.get("/home", validateSession, (req, res) => {    
    const { session } = req;
    res.status(200).send(session.accessToken);
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
