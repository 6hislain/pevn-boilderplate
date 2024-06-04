import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import defaultRoutes from "./routes";
import authRoutes from "./routes/auth";
import express, { Express } from "express";
import { AppDataSource } from "./data-source";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(defaultRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
