import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import astrologerRoute from "./routes/route.js";




dotenv.config();
const app= express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors())


app.get("/", (req,res) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/connect-astrolegers",astrologerRoute)
 app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


