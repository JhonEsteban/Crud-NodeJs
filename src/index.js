const express = require('express');
const app = express();

const cors = require('cors');
const { PORT } = require('./config');

const IndexRoutes = require('./routes/index.routes');
const TaskRoutes = require('./routes/task.routes');

// Initial Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
