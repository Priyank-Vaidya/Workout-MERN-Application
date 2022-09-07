const express = require('express');
const async = require('hbs/lib/async');
const { TopologyDescription } = require('mongodb');
const Workout = require("../models/workoutsModel");
const {createWorkout, getAllWorkouts, getWorkout,deleteWorkout, updateWorkout} = require("../controllers/workoutController");

const router = express.Router();

router.get('/',getAllWorkouts);

router.get('/:id',getWorkout);
//POST a new workout
router.post('/',createWorkout);

//DELETE a workout
router.delete('/:id',deleteWorkout);
//UPDATE a workout
router.patch('/:id',updateWorkout);
 
module.exports = router;