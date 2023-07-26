import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "routes";
import helmet from "helmet";
import "utils/db";

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("*", (_req, res) => {
  res.status(404).json({ error: "❌ Route not found!" });
});

app.use(routes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server 💻 listening on ${PORT}`);
})