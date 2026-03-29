const express = require('express'); // Import express library
const cors = require('cors'); // Import CORS middleware
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const taskRoutes = require('./routes/taskRoutes'); // Import task routes

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

app.listen(5000, () => console.log('Server running (memory mode)'));
