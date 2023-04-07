import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50emb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(3000, () => console.log("Server has started on port 3000"));
