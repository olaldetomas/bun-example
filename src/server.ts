import express, { Request, Response } from "express";
import config from "./config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Bun!");
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});

export default app;
