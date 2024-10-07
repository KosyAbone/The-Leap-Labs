const express = require('express');
const router = express.Router();

// Array to store tasks
const tasks = [];

// Middleware to log incoming requests
router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Define the GET /tasks route to retrieve all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Define the POST /tasks route to create a new task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const task = { title, description };
  tasks.push(task);
  res.status(201).json(task);
}); 

module.exports = router;