import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth-route.js";
import orderRouter from "./routes/order-route.js";
import { createLogger, transports } from "winston";
import LokiTransport from "winston-loki";
const options = {
  transports: [
    new LokiTransport({
      host: "http://127.0.0.1:3100"
    })
  ]
};
export const logger = createLogger(options);



dotenv.config();
const app= express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors())


app.get("/", (req,res) => {
  res.send("Backend System With Queues");
});

app.use("/api/auth",authRouter)
app.use("/api/order",orderRouter)

 app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


