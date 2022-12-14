import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/error.js";
import cors from 'cors';

config({
  path: "./config.env",
});
const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

import medication from "./routes/medicationRoutes.js";

app.use("/api/v1", medication);

export default app;
app.use(ErrorMiddleware);