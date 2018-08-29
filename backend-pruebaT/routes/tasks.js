const express = require('express');
const Tasks = require('../models/Tasks');
const router = express.Router();

// Get all Tasks

router.get('/tasks', (req,res, next) => {

  Tasks.find()
  .then( tasks => {
    return res.status(200).json(tasks);
  })
  .catch(e => {
    console.log(e)
    res.status(500).res.json(e)
  })
})

// Create Task

router.post('/newtask', (req,res,next)=>{
  let newtask = {}

  Tasks.create(req.body)
  .then(task=>{
    return res.status(200).json(task)
  })
  .catch(e=>{
    return res.json(e).status(500)
  })
})

// Modify Task

router.put('task/:id', (req, res, next)=> {

  Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then( task => {
    return res.json(task).status(200)
  })
  .catch(e => {
    return res.json(e).status(500)
  })
})


// Delete Task

router.delete('task/:id', (req,res,next)=> {

  Tasks.findByIdAndRemove(req.params.id)
  .then(task => {
    res.status(200).json(task)
  })
  .catch(e=> {
    res.status(404).json({message: 'Error Fatal'})
  })
})

module.exports = router;