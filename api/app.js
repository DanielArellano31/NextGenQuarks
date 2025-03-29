import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerUser, logIn, test, getAllUsers } from "./controllers/userController.js";
import { createReport, getAllReports } from "./controllers/ReportController.js";
import { CreateBus, getReportsByBus } from "./controllers/BusController.js";

dotenv.config();
mongoose.connect(process.env.urlbase)
  .then(() =>{
    console.log("funciona la base de datos");
  })
  .catch((error) => {
    console.log("No funciona");
  });

const app = express();
app.use(cors());
app.use(express.json());
//reportes
app.post("/createReport", createReport)
app.post("/getAllReports", getAllReports)
app.get("/getUsers", getAllUsers)
app.post("/register", registerUser)
app.post("/login", logIn)
//Buses
app.post("/createBus", CreateBus)
app.get("/getreportbus", getReportsByBus)


app.listen(4000, () => {
    console.log("se escucha el servidor");
  });
  

test();