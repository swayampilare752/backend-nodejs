const express = require("express");
const dotenv = require("dotenv");
// connection of mongoDB  Using Mongoose

const mongoose = require("mongoose");

const app = express();

dotenv.config();

app.use(express.json());

mongoose
.connect(process.env.DB_URL)
.then(() => console.log(`DB Connected successfully`))
.catch(err => console.log(`Error connecting database`, err)); 

const JobRoutes = require("./route/job.routes");   // connection to  routes folder   

const Portno = 8080;

app.use ("/api/v1/job", JobRoutes);




app.listen(Portno, () => console.log(`Server Running at ${Portno}`));