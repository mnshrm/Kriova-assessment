import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import empRouter from "./routes/Employee.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/Employee", empRouter);

app.listen(4000, () => console.log("Server started at port 4000"));
