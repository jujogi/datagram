import express from "express";
import helmet from "helmet"
import cors from "cors";
import passport from "passport";
import fbStrategy from "./strategies/facebook.strategy"

const PORT = 3000;

const app = express();

app.use(express.json())
app.use(helmet());
app.use(cors());

app.use(passport.initialize());
app.use("/", fbStrategy);


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
