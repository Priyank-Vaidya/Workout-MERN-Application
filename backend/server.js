require('dotenv').config();
const express = require("express");
const routers = require('../backend/routes/workouts');
const mongoose = require('mongoose');

const app = express();

//moddleware

//All of the files which needs to be updated and changed must be taken inside json format 
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
});



app.use('/api/workouts', routers);

//connect to db
mongoose.connect(process.env.MONGO_URI, {user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;

    try{
        app.listen(process.env.PORT,()=>{
            console.log("connected to db and Listening to port 3000");
        // });
    
    });
    }
    catch (error) {console.log("Error in connecting")};

// API ENDPOINTS
// GET /workouts --> Gets all the workout documents
// POST /workouts --> Creates a new workout documents
// GET /workouts/:id --> Gets a single workout document
// DELETE /workouts/:id --> Delets a sinfle workout
// PATCH /workouts/:id --> Updates a single workout

