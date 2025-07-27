# Expense Management System using MERN Stack

### 🔗 Vercel Link: https://expense-tracker-app-three-beryl.vercel.app/

## 🧾 Project Description

The Expense Management System is a full-stack web application designed to help users track and manage their expenses. Built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), it provides an intuitive UI, powerful backend, and insightful analytics.

---

## 🎯 Objectives

1. Simplify expense tracking and organization.
2. Provide deep insights into user spending behavior.
3. Offer CRUD functionality for expenses and categories.
4. Generate visual reports and summaries.

---

## ✨ Features

### 🔐 Authentication & Authorization
- Register/Login functionality
- JWT-based secure authentication
- Role-based access control

### 💸 Expense & Category Management
- Add, update, delete expense entries
- Manage custom categories
- Attach receipts (if needed)

### 📊 Dashboard & Reporting
- Total expense summaries
- Expense breakdown by category and time
- Bar and pie charts powered by chart.js

### 📱 Responsive UI
- Clean and responsive layout using Bootstrap & Material Icons
- Optimized for desktop and mobile

### 🧰 Swagger API Docs
- API documentation using Swagger available at: `http://localhost:8000/api-docs`

---

## ⚙️ Technical Architecture

### Frontend
- Built with React 18+
- Used libraries: `tsparticles`, `moment`, `react-datepicker`, `unique-names-generator`

### Backend
- Express.js server with modular routes
- Secure APIs with JWT middleware
- Swagger/OpenAPI integration

### Database
- MongoDB with Mongoose schemas and validations

### DevOps & Deployment
- Frontend deployed on Vercel
- Backend hosted on Render
- GitHub for version control

---

## 🧪 Demo Credentials

| Role | Email | Password |
|------|-------------------------|----------|
| User | vedantbaliyan@gmail.com | 123 |

> ✅ You can also register a new account to test it yourself!

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- Git

### Installation
```bash
# Clone the repo
$ git clone https://github.com/Vedantbaliyan/Finance-Tracker-System.git
$ cd Finance-Tracker-System

# Install Backend dependencies
$ cd backend
$ npm install

# Install Frontend dependencies
$ cd ../frontend
$ npm install
```

### Setup Environment Variables
Create a `config` folder inside `backend` and add a file named `config.env`:
```env
MONGO_URL=your_mongo_uri
PORT=8000
JWT_SECRET=your_jwt_secret
```

### Run the App
```bash
# Start backend server
$ cd backend
$ npm run dev

# Start frontend
$ cd ../frontend
$ npm run dev
```

### Access the App
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`
- Swagger Docs: `http://localhost:8000/api-docs`

---

## 🚀 Tech Stack

**Client:** React, tsparticles, Bootstrap, Material Icons  
**Server:** Node.js, Express.js, Swagger  
**Database:** MongoDB (with Mongoose ORM)

---

> 👨‍💻 Made with 💻 by Vedant Baliyan
