# 🌸 BrainBloom AI – Intelligent Study Assistant

> An AI-powered study assistant that helps students learn smarter through personalized explanations, quizzes, flashcards, PDF analysis, and AI-driven study tools.

![GitHub stars](https://img.shields.io/github/stars/TANIISHAA19/ai-study-assistant?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/TANIISHAA19/ai-study-assistant?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Express-success?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-success?style=for-the-badge)
![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini-orange?style=for-the-badge)

---

## 📖 Overview

BrainBloom AI is an intelligent study assistant designed to make learning more interactive and personalized. Instead of switching between multiple tools for studying, students can use one platform to ask questions, generate quizzes, create flashcards, summarize PDFs, chat with uploaded documents, build study plans, and receive AI-powered answer evaluations.

This project combines modern backend development with Generative AI to deliver practical learning features through a clean and user-friendly interface.

---

## 👩‍💻 My Contribution

This project was developed collaboratively.

### I was responsible for:

- Designing and building the complete backend using **Node.js** and **Express.js**
- Developing RESTful APIs
- Integrating **Google Gemini API** for AI-powered features
- Implementing **JWT Authentication** and user management
- Managing data with **MongoDB Atlas**
- Testing APIs using **Postman**
- Integrating the frontend developed by my teammate with the backend
- Refining frontend functionality where required during integration
- Containerizing the application using **Docker**
- Deploying the application on **AWS EC2** using **PM2**

---

# ✨ Features

## 🤖 AI Learning

- AI Chat Assistant
- Learn with AI
- Answer Evaluation

## 📚 Study Tools

- Quiz Generator
- Flashcards
- Study Planner

## 📄 PDF Intelligence

- PDF Summarizer
- PDF Chat

## 🔐 User Features

- Secure Authentication
- User Dashboard
- Study History

---

# 🛠 Tech Stack

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| REST APIs | API Development |
| JWT | Authentication |

---

## Database

| Technology | Purpose |
|------------|---------|
| MongoDB Atlas | Cloud Database |
| MongoDB Compass | Database Management |

---

## AI

| Technology | Purpose |
|------------|---------|
| Google Gemini API | AI-powered study features |

---

## Developer Tools

- Docker
- Git
- GitHub
- Postman
- VS Code
- AWS EC2
- PM2

---

# 🏗 Project Architecture

```text
                    User
                      │
                      ▼
          React Frontend (Teammate)
                      │
          REST API Requests
                      │
                      ▼
        Express.js Backend (Built by Me)
                      │
     ┌────────────────┼────────────────┐
     │                │                │
     ▼                ▼                ▼
Google Gemini     MongoDB Atlas     JWT Auth
      API           Database
```

---

# 📂 Folder Structure

```text
brainbloom-ai/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── utils/
├── config/
├── Dockerfile
├── server.js
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Before running the project, make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account
- Google Gemini API Key
- Git

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-study-assistant.git
```

Move into the project directory

```bash
cd ai-study-assistant
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_google_gemini_api_key
```

---

# ▶️ Running Locally

Start the development server

```bash
npm run dev
```

or

```bash
npm start
```

The backend will run at

```
http://localhost:3000
```

---

# 🐳 Docker

Build the Docker image

```bash
docker build -t brainbloom-ai .
```

Run the container

```bash
docker run -p 3000:3000 brainbloom-ai
```

---

# ☁️ Deployment

The application backend is deployed on **AWS EC2**.

Deployment workflow:

- Dockerized the application
- Hosted on AWS EC2
- Managed processes using PM2
- Connected the deployed backend with the frontend

---

# 📸 Screenshots

> Add screenshots after deployment.

## Home Page

```
/screenshots/home.png
```

---

## AI Chat

```
/screenshots/chat.png
```

---

## Quiz Generator

```
/screenshots/quiz.png
```

---

## Flashcards

```
/screenshots/flashcards.png
```

---

## PDF Summarizer

```
/screenshots/pdf-summary.png
```

---

## Dashboard

```
/screenshots/dashboard.png
```

---

# 📈 Future Improvements

- Voice-based AI interaction
- AI-generated study recommendations
- Multi-language support
- Collaborative study rooms
- Notes synchronization
- Performance analytics
- Mobile-friendly interface
- Dark mode improvements

---

# 📚 Learning Outcomes

Building BrainBloom AI helped me strengthen my understanding of:

- Backend development with Express.js
- REST API design
- Authentication using JWT
- MongoDB Atlas integration
- AI API integration using Google Gemini
- Error handling and API testing
- Docker containerization
- AWS EC2 deployment
- Process management with PM2
- Collaborating with frontend development

---

# 🤝 Acknowledgements

- Google Gemini API
- MongoDB Atlas
- Express.js
- Node.js
- Docker
- AWS

---

# 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

---

# 📬 Contact

**Tanisha Sharma**

B.Tech Computer Science Engineering (Expected Graduation: 2028)

- 💼 LinkedIn: https://www.linkedin.com/in/tanishasharma-cse/
- 💻 GitHub: https://github.com/TANIISHAA19

---

⭐ If you found this project interesting, consider giving it a star!
