import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import { connectDatabase } from "./infrastructure/database/mongodb.js";


const app = express();

const PORT =env.PORT;

app.use(helmet())

app.use(cors({
    origin:"http:///localhost:5173"
}))

app.use(express.json())

app.get("/test",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"VendorVibe AI API running...."
    })
})


async function startServer(): Promise<void> {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`VendorVibe AI server running on port ${PORT}`);
  });
}

startServer().catch((error: unknown) => {
  console.error("Failed to start VendorVibe AI:", error);
  process.exitCode = 1;
});