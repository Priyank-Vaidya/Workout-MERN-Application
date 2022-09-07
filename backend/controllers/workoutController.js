const async = require("hbs/lib/async");
const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutsModel");

//get all the workouts
const getAllWorkouts = async(req,res)=>{
    const workout = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workout);
}



//get a single workout
const getWorkout = async(req,res)=>{
    const {id} =req.params
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error: 'No Such workout'});
    }

    res.status(200).json(workout);
}



//function to create a new workout
const createWorkout = async(req,res)=>{
    const {title, load, reps} = req.body;

    //add doc to db
    try{
        //Workout.create() is async in operation so we use async await insode the req,res parameter
        // All the obj data will be stored inside 'workout' and we will display it.  
        const workout = await Workout.create({title, load, reps}); 
        res.status(200).json(workout);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
    res.json({msg: "Post a new workout"})
}



//Delete a workout
const deleteWorkout = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such id found"});
    }

    const workout = await Workout.findOneAndDelete({_id: id});
    if(!workout){
        return res.status(404).json({error: 'No Such workout'});
    }
    res.status(200).json(workout);
}


//update a workout
const updateWorkout = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such id found"});
    }

    const workout = await Workout.findByIdAndUpdate({_id: id},{...req.body});
    if(!workout){
        return res.status(404).json({error: 'No Such workout'});
    }

    res.status(200).json(workout);
}


module.exports = {createWorkout, getAllWorkouts,getWorkout,deleteWorkout};