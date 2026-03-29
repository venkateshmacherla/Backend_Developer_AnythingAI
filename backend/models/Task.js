const mongoose = require('mongoose'); // Import mongoose library

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
