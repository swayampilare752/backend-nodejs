const express = require("express");

// connection of mongoDB  Using Mongoose

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
.connect("mongodb+srv://swayampilare07:6GtmZXEdiGQAwrt8@cluster0.5usvwso.mongodb.net/")
.then(() => console.log(`DB Connected successfully`))
.catch(err => console.log(`Error connecting database`, err)); 

const JobRoutes = require("./route/job.routes");   // connection to  routes folder   

const Portno = 8080;

app.use ("/api/v1/job", JobRoutes);




app.listen(Portno, () => console.log(`Server Running at ${Portno}`));