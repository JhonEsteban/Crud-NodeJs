const express = require('express');
const router = express.Router();

const { ObjectId } = require('mongodb');
const connectToMongodb = require('../database');

// GET ALL
router.get('/', async (req, res) => {
  const db = await connectToMongodb();

  const result = await db.collection('tasks').find({}).toArray();

  res.json({
    data: result,
  });
});

// GET ONE
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const db = await connectToMongodb();

  const result = await db.collection('tasks').findOne({ _id: ObjectId(id) });

  res.json({
    data: result,
  });
});

// CREATE
router.post('/', async (req, res) => {
  const db = await connectToMongodb();

  const { name, description, done } = req.body;

  const result = await db
    .collection('tasks')
    .insertOne({ name, description, done });

  res.json({
    result,
    success: true,
    message: 'La tarea se añadio con exito',
  });
});

// UPDATE
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, done } = req.body;

  const db = await connectToMongodb();

  const result = await db
    .collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, description, done } });

  res.json({
    result,
    success: true,
    message: `La tarea con el id ${id} se actualizo con exito`,
  });
});

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const db = await connectToMongodb();

  const result = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });

  res.json({
    result,
    success: true,
    message: `La tarea con el id ${id} se elimino con exito`,
  });
});

module.exports = router;
