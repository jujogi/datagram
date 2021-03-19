import express from "express";
import expressSession from "express-session";
import bodyParser from "body-parser";
import helmet from "helmet"
import cors from "cors";
import passport from "passport";
import authRouter from "./routes/auth.routes"


const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use(passport.initialize());
app.use(expressSession({
    resave: false,
    saveUninitialized: true,
    secret: 'datagram',
    cookie: {
        secure: false,
    }
}));

app.use("/auth", authRouter);

app.get("/home", (req, res) => {    
    const { user } = req.session.passport;
    res.status(200).send(user);
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
