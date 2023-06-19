import birdsRoutes from "./routes/birdsRoutes";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/birds", birdsRoutes);

export default app;
