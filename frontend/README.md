# AnythingAI Task Manager

A full-stack Task Manager application built using:

- **Frontend:** React.js + Material UI  
- **Backend:** Node.js + Express.js  
- **Architecture:** REST API  

---

## Project Structure


ANYTHINGAI/
│
├── backend/
│ ├── controllers/
│ │ └── taskController.js
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── .env
│ ├── app.js
│ ├── dataStore.js
│ ├── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ ├── Tasks.js
│ │ │
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── index.js
│ │ ├── index.css
│
└── README.md


---

## Backend Setup

### 1. Navigate to backend
```bash
cd backend
2. Install dependencies
npm install express cors
3. Run server
node app.js

Backend runs at:
http://localhost:5000

Frontend Setup
1. Navigate to frontend
cd frontend
2. Install dependencies
npm install
npm install axios @mui/material @emotion/react @emotion/styled @mui/icons-material
3. Run frontend
npm start

Frontend runs at:
http://localhost:3000

Features
User Registration & Login
Create Tasks
View Tasks
Update Tasks
Delete Tasks

Usage
Register a new user
Login using credentials
Manage tasks (Add / Edit / Delete)
API Endpoints
Method	Endpoint	Description
POST	/api/v1/tasks	Create task
GET	/api/v1/tasks	Get all tasks
GET	/api/v1/tasks/:id	Get single task
PUT	/api/v1/tasks/:id	Update task
DELETE	/api/v1/tasks/:id	Delete task

Tech Stack
Node.js
Express.js
React.js
Material UI
Axios

Notes
Ensure backend is running before frontend
Configure .env if needed
Update API base URL for deployment