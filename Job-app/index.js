const express = require("express");

// connection of mongoDB  Using Mongoose

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
.connect("mongodb://127.0.0.1:27017/jobapp")
.then(() => console.log(`DB Connected successfully`))
.catch(err => console.log(`Error connecting database`, err)); 

const JobRoutes = require("./route/job.routes");   // connection to  routes folder   

const Portno = 8080;

app.use ("/api/v1/job", JobRoutes);




app.listen(Portno, () => console.log(`Server Running at ${Portno}`));