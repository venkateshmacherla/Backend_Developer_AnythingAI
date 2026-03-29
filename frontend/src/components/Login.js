import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material";

export default function Login({ setToken }) {
    const [form, setForm] = useState({ username: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.username || !form.password) {
        alert("Please enter username and password");
        return;
        }
        try {
        const res = await axios.post("http://localhost:5000/api/v1/auth/login", form);
        setToken(res.data.token);
        } catch (err) {
        alert(err.response?.data?.msg || "Login failed");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
        <TextField label="Username" fullWidth margin="normal"
            onChange={e => setForm({ ...form, username: e.target.value })}/>
        <TextField label="Password" type="password" fullWidth margin="normal"
            onChange={e => setForm({ ...form, password: e.target.value })}/>
        <Button type="submit" variant="contained">Login</Button>
        </Box>
    );
}
