import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tutorRoute from "./routes/tutor.js";
import codeRoute from "./routes/code.js";
import mockRoute from "./routes/mock.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tutor", tutorRoute);
app.use("/api/code", codeRoute);
app.use("/api/mock", mockRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
