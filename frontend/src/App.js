import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import Register from "./components/Register";
import Login from "./components/Login";
import Tasks from "./components/Tasks";

function App() {
  const [token, setToken] = useState(null);
  const [view, setView] = useState("register"); // or "login"

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          AnythingAI Frontend
        </Typography>

        {view === "register" && <Register />}
        {view === "login" && <Login setToken={setToken} />}

        {!token && (
          <Box sx={{ mt: 2 }}>
            <Button onClick={() => setView("register")}>Go to Register</Button>
            <Button onClick={() => setView("login")}>Go to Login</Button>
          </Box>
        )}

        {token && <Tasks token={token} />}
      </Box>
    </Container>
  );
}


export default App;
