
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const commentsRouter = require('./routes/comments');
const eventsRouter = require('./routes/Events');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors({
  origin: ['http://localhost:3000'],  // Modify for frontend's domain.
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Routes setup
app.use('/api/events', eventsRouter);
app.use('/api/comments', commentsRouter);
app.use('/auth', authRoutes); 

// MongoDB setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Error handling middleware - Place after other app.use() calls
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
