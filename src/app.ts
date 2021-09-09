import Express from "express";
import cors from "cors";
import { router } from "./routes";

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(router);

export { app };
