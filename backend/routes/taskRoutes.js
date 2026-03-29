const express = require('express'); // Import express library
const router = express.Router(); // Create router instance
const auth = require('../middleware/auth'); // Import auth middleware
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');

router.post('/', auth(), createTask); // Create task route
router.get('/', auth(), getTasks); // Get all tasks route
router.get('/:id', auth(), getTask); // Get single task route
router.put('/:id', auth(), updateTask); // Update task route
router.delete('/:id', auth(), deleteTask);  // Delete task route

module.exports = router;
