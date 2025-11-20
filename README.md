# 🌐 Shreyash Kashyap – Portfolio Website

A premium, production-ready portfolio website built using **React**, **Tailwind CSS**, and **Node.js**.

## 🚀 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend
- Node.js & Express
- Nodemailer
- CORS

## 📂 Project Structure

```
portfolio-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   └── App.jsx
│   ├── index.html
│   └── tailwind.config.js
└── backend/
    ├── server.js
    ├── package.json
    └── .env
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/shreyashkashyapanand01/portfolio_website.git
cd portfolio_website
```

### 2. Backend Setup
The backend runs on port 5000 by default.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env` file in the `backend` directory with the following:
   ```env
   PORT=5000
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```
   > **Note:** You need an App Password from Google if using Gmail.

4. Start the server:
   ```bash
   npm start
   ```

### 3. Frontend Setup
The frontend runs on port 5173 by default.

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 Deployment
- Frontend: Vercel / Netlify  
- Backend: Render / Railway

## ✨ Features
- Premium UI  
- Animations  
- Dark/Light Mode  
- Project Showcase  
- Contact Form (Nodemailer)  
- Fully Responsive  
