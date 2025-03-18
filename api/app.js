import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerUser, logIn, test } from "./controllers/userController.js";

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


app.post("/register", registerUser)
app.post("/login", logIn)
app.listen(4000, () => {
    console.log("se escucha el servidor");
  });
  

test();