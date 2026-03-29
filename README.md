# AnythingAI Task Manager

This is a simple full-stack task manager application built using React on the frontend and Node.js with Express on the backend. It allows users to register, log in, and manage their tasks through a clean interface and REST APIs.

---

## Project Structure

```
ANYTHINGAI/
│
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── app.js
│   ├── dataStore.js
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Tasks.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│
└── README.md
```

---

## Backend Setup

First, go into the backend folder:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install express cors
```

Then start the server:

```bash
node app.js
```

The backend will run at:
http://localhost:5000

---

## Frontend Setup

Now move to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
npm install axios @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Start the React app:

```bash
npm start
```

The frontend will run at:
http://localhost:3000

---

## What You Can Do

* Create a new account and log in
* Add new tasks
* View all your tasks
* Edit existing tasks
* Delete tasks

---

## How It Works

Once you log in, you can start managing your tasks. All task operations (create, read, update, delete) are handled through REST APIs built in the backend.

---

## API Endpoints

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| POST   | /api/v1/tasks     | Create a task |
| GET    | /api/v1/tasks     | Get all tasks |
| GET    | /api/v1/tasks/:id | Get one task  |
| PUT    | /api/v1/tasks/:id | Update a task |
| DELETE | /api/v1/tasks/:id | Delete a task |

---

## Tech Stack

* Node.js
* Express.js
* React.js
* Material UI
* Axios

---

## Notes

* Make sure the backend server is running before starting the frontend
* You can use a `.env` file for configuration if needed
* Update API URLs if you deploy the project

---

This project is built for learning and demonstration purposes and can be extended further with features like authentication tokens, database integration, and deployment.
