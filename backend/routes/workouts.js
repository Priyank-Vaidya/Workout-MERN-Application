const express = require('express');
const async = require('hbs/lib/async');
const { TopologyDescription } = require('mongodb');
const Workout = require("../models/workoutsModel");
const {createWorkout, getAllWorkouts, getWorkout} = require("../controllers/workoutController");

const router = express.Router();

router.get('/',getAllWorkouts);

router.get('/:id',getWorkout);
//POST a new workout
router.post('/',createWorkout);

//DELETE a workout
router.delete('/:id',(req,res)=>{
    res.json({msg: "DELETE a single workout"})
});
//UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({msg: "UPDATE a single workout"})
});
 
module.exports = router;