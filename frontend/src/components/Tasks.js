import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  TextField, Button, List, ListItem, ListItemText,
  IconButton, Box, Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Tasks({ token }) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "" });
    const [editingTask, setEditingTask] = useState(null);

    const headers = useMemo(() => ({ Authorization: `Bearer ${token}` }), [token]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/tasks", { headers })
        .then(res => setTasks(res.data || []))
        .catch(err => alert(err.response?.data?.msg || "Failed to fetch tasks"));
    }, [headers]);

    const addTask = async () => {
        if (!newTask.title || !newTask.description) {
        alert("Please enter title and description");
        return;
        }
        try {
        const res = await axios.post("http://localhost:5000/api/v1/tasks", newTask, { headers });
        if (res.data && res.data.title) {
            setTasks([...tasks, res.data]);
        }
        setNewTask({ title: "", description: "" });
        } catch (err) {
        alert(err.response?.data?.msg || "Failed to add task");
        }
    };

    const deleteTask = async (id) => {
        try {
        await axios.delete(`http://localhost:5000/api/v1/tasks/${id}`, { headers });
        setTasks(tasks.filter(t => t && t.id !== id));
        } catch (err) {
        alert(err.response?.data?.msg || "Failed to delete task");
        }
    };

    const saveEdit = async () => {
        try {
        const res = await axios.put(
            `http://localhost:5000/api/v1/tasks/${editingTask.id}`,
            editingTask,
            { headers }
        );
        if (res.data && res.data.title) {
            setTasks(tasks.map(t => (t.id === editingTask.id ? res.data : t)));
        }
        setEditingTask(null);
        } catch (err) {
        alert(err.response?.data?.msg || "Failed to update task");
        }
    };

    return (
        <Box sx={{ mt: 3 }}>
        {/* Add Task Form */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
            label="Title"
            value={newTask.title}
            onChange={e => setNewTask({ ...newTask, title: e.target.value })}
            />
            <TextField
            label="Description"
            value={newTask.description}
            onChange={e => setNewTask({ ...newTask, description: e.target.value })}
            />
            <Button onClick={addTask} variant="contained">Add Task</Button>
        </Box>

        {/* Task List */}
        <List>
            {tasks.filter(t => t && t.title).map(t => (
            <ListItem
                key={t.id}
                secondaryAction={
                <>
                    <IconButton onClick={() => setEditingTask(t)}><EditIcon /></IconButton>
                    <IconButton onClick={() => deleteTask(t.id)}><DeleteIcon /></IconButton>
                </>
                }
            >
                <ListItemText primary={t.title} secondary={t.description} />
            </ListItem>
            ))}
        </List>

        {/* Edit Dialog */}
        {editingTask && (
            <Dialog open={true} onClose={() => setEditingTask(null)}>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
                <TextField
                label="Title"
                fullWidth
                margin="normal"
                value={editingTask.title}
                onChange={e => setEditingTask({ ...editingTask, title: e.target.value })}
                />
                <TextField
                label="Description"
                fullWidth
                margin="normal"
                value={editingTask.description}
                onChange={e => setEditingTask({ ...editingTask, description: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setEditingTask(null)}>Cancel</Button>
                <Button onClick={saveEdit} variant="contained">Save</Button>
            </DialogActions>
            </Dialog>
        )}
        </Box>
    );
}
