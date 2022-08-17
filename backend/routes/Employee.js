import express from "express";
import { getEmpDetails } from "../controllers/Employee.js";
const router = express.Router();

router.get("/:email", getEmpDetails);

export default router;
