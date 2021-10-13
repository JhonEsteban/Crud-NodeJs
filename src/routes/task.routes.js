const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  getOneTask,
  createNewTask,
  updateTaskById,
  deleteTaskById,
} = require('../controllers/tasks.controller');

// GET ALL
router.get('/', getAllTasks);

// GET ONE
router.get('/:id', getOneTask);

// CREATE
router.post('/', createNewTask);

// UPDATE
router.put('/:id', updateTaskById);

// DELETE
router.delete('/:id', deleteTaskById);

module.exports = router;
