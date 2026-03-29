const { tasks } = require('../dataStore'); // Import tasks array from dataStore

// Create Task
exports.createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ msg: 'Title is required' });

    const task = {
        id: tasks.length + 1,
        title,
        description: description || '',
        createdBy: req.user?.id || null
    };
    tasks.push(task);

    // Return the full task object
    res.status(201).json(task);
};

// Get All Tasks
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// Get Single Task
exports.getTask = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id == id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.json(task);
};

// Update Task
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const task = tasks.find(t => t.id == id);

    if (!task) return res.status(404).json({ msg: 'Task not found' });

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;

    // Return the updated task object directly
    res.json(task);
};

// Delete Task
exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id == id);

    if (index === -1) return res.status(404).json({ msg: 'Task not found' });

    const deleted = tasks.splice(index, 1)[0];

    // Return the deleted task object
    res.json(deleted);
};
