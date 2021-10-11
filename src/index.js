const express = require('express');
const app = express();

const cors = require('cors');
const { PORT } = require('./config');

const IndexRoutes = require('./routes/index.routes');

// Initial Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(IndexRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
