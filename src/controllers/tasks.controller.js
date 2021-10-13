const connectToMongodb = require('../database');
const { ObjectId } = require('mongodb');

const getAllTasks = async (req, res) => {
  const db = await connectToMongodb();

  const result = await db.collection('tasks').find({}).toArray();

  res.json({
    data: result,
  });
};

const getOneTask = async (req, res) => {
  const { id } = req.params;

  const db = await connectToMongodb();

  const result = await db.collection('tasks').findOne({ _id: ObjectId(id) });

  res.json({
    data: result,
  });
};

const createNewTask = async (req, res) => {
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
};

const updateTaskById = async (req, res) => {
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
};

const deleteTaskById = async (req, res) => {
  const { id } = req.params;

  const db = await connectToMongodb();

  const result = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });

  res.json({
    result,
    success: true,
    message: `La tarea con el id ${id} se elimino con exito`,
  });
};

module.exports = {
  getAllTasks,
  getOneTask,
  createNewTask,
  updateTaskById,
  deleteTaskById,
};
