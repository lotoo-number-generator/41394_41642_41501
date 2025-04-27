# 🎰 Lotto Number Generator 🎰  
A full-stack web app that lets users generate 6 random lottery numbers, stores the results in a database, and displays the last 10 generations — all fully deployed!

---

## 📌 Project Members
- 👩‍💻 Nigar Alizada (Frontend & Backend)
- 👩‍💻 Elifcan Yasar (Frontend & Deployment)
- 👩‍💻 Eda Tas (Frontend & Backend)


---

## 🚀 Live Demo

- 🎯 **Frontend (React):**  
  https://nigaralizada9.github.io/41394_41642_41501

- 🧠 **Backend (Flask API):**  
  [Generate Lotto Numbers](https://four1394-41642-41501.onrender.com/generate)  
  [View History](https://four1394-41642-41501.onrender.com/history)


---

## 📦 Tech Stack

| Area      | Tech Used                     |
|-----------|-------------------------------|
| Frontend  | React, Bootstrap, Axios       |
| Backend   | Flask, Flask-CORS, SQLite     |
| Database  | SQLite (local file-based DB)  |
| Deployment| GitHub Pages (frontend), Render.com (backend)

---

## 🎮 Features

- 🎲 **Generate 6 Unique Random Lotto Numbers** (1–49)
- 🧠 **Store Each Result** with timestamp in SQLite
- 🕒 **View Last 10 Generations** in history
- ⚡ **Live API** with CORS support
- ✅ Fully Responsive (Bootstrap)
- 🛡️ Handles errors gracefully (frontend + backend)

---

## 🛠️ Backend API Endpoints

| Method | Route                         | Description                    |
|--------|-------------------------------|--------------------------------|
| GET    | `/generate`                   | Generate and store new numbers |
| GET    | `/history`                    | Fetch last 10 generated draws  |

Built with Flask and deployed using Render.

---

## 🧪 How It Works

- React calls `/generate` to fetch numbers → Flask returns them → SQLite stores them
- React calls `/history` to fetch past results
- All logic is done server-side, frontend handles display

---

## 📁 Folder Structure

Flask_Loto/
├── app.py                 # 🧠 Flask backend (main API logic)
├── lotto.db               # 📊 SQLite database (auto-created if not found)
├── render.yaml            # ⚙️ Render deployment config
├── requirements.txt       # 📦 Backend dependencies (Flask + CORS only)
├── runtime.txt            # 🐍 Python version hint for Render (3.10)
├── README.md              # 📘 Project documentation
└── lotto-frontend/        # 🌐 React frontend
    ├── public/            # 🖼️ Static assets (index.html, icons)
    ├── src/               # ⚛️ React components + App logic
    │   ├── App.js         # 🎯 Main frontend logic
    │   ├── components/
    │   │   ├── LottoNumberDisplay.js  # 💡 Displays generated numbers
    │   │   └── LottoHistory.js        # 📜 Shows recent draws
    ├── package.json       # 📦 React project config & dependencies
    ├── .gitignore         # 🙈 Files excluded from Git
    └── README.md          # (Optional) Frontend-specific doc

## 📦 Deployment Notes

- 🔧 **Backend** is deployed using [Render.com](https://render.com)  
  ↳ Configured via `render.yaml` and `runtime.txt`  
  ↳ **Live endpoints:**  
  - [Generate Lotto Numbers](https://four1394-41642-41501.onrender.com/generate)  
  - [View History](https://four1394-41642-41501.onrender.com/history)

- 🌍 **Frontend** is deployed to [GitHub Pages](https://pages.github.com)  
  ↳ Using `gh-pages` npm package  
  ↳ **Live site:**  
  - [https://nigaralizada9.github.io/41394_41642_41501](https://nigaralizada9.github.io/41394_41642_41501)


