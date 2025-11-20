const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Project Data (Hardcoded as per plan)
const projects = [
    {
        id: 1,
        title: "CashFlow",
        description: "A full-stack personal finance tracker to record income and expenses, manage categories, and visualize spending using interactive charts.",
        techStack: ["Spring Boot", "React", "MySQL", "JWT"],
        category: "Web Dev",
        github: "https://github.com/shreyashkashyapanand01/CashFlow",
        demo: null,
        features: ["Income & Expense Tracking", "Category Management", "Data Visualization", "JWT Authentication"]
    },
    {
        id: 2,
        title: "ResearchPilot AI",
        description: "AI-powered Research Agent that performs deep research, analyzes data, and generates structured reports using agentic workflows.",
        techStack: ["Node.js", "Gemini API", "Tavily API", "Puppeteer"],
        category: "AI/Agentic",
        github: "https://github.com/shreyashkashyapanand01/collegeMajorProject1",
        demo: null,
        features: [
            "Agentic Research Pipeline",
            "Automated Report Generation",
            "Web Scraping & Data Extraction",
            "LLM-Powered Analysis"
        ]
    },
    {
        id: 3,
        title: "Earthly",
        description: "A cloud-first microservices e-commerce application built with Spring Boot, React, and MongoDB, deployed on AWS EKS using Kubernetes, Docker, Terraform, and GitHub Actions CI/CD.",
        techStack: ["Spring Boot", "React", "MongoDB", "Docker", "Kubernetes", "Terraform", "AWS EKS", "GitHub Actions"],
        category: "Web Dev",
        github: "https://github.com/shreyashkashyapanand01/Earthly",
        demo: null,
        features: [
            "Microservices Architecture",
            "Spring Cloud Gateway & Eureka Registry",
            "JWT Authentication",
            "Dockerized Services",
            "Kubernetes Deployment (Helm Charts)",
            "AWS EKS Infrastructure",
            "CI/CD with GitHub Actions"
        ]
    },
    {
        id: 4,
        title: "Network Security ML",
        description: "An end-to-end machine learning system for detecting phishing and malicious network activity, featuring automated pipelines, model training, experiment tracking, and a FastAPI-based prediction service.",
        techStack: ["Python", "Scikit-learn", "FastAPI", "MLflow", "Docker", "MongoDB"],
        category: "Machine Learning",
        github: "https://github.com/shreyashkashyapanand01/Network_Security_ML",
        demo: null,
        features: [
            "Automated Data Pipeline",
            "Schema & Data Drift Validation",
            "Advanced Data Transformation",
            "Ensemble Model Training",
            "MLflow Experiment Tracking",
            "FastAPI Prediction Service",
            "Docker Containerization",
            "Comprehensive Logging"
        ]
    },
    {
        id: 5,
        title: "RNN IMDB Sentiment Analysis",
        description: "A deep learning-based sentiment analysis system trained on the IMDB dataset using an RNN architecture, deployed as an interactive Streamlit web application for real-time predictions.",
        techStack: ["TensorFlow", "Keras", "Streamlit", "Python"],
        category: "Deep Learning",
        github: "https://github.com/shreyashkashyapanand01/RNN_IMDB",
        demo: "https://imdbsentimentalanalysisrnn.streamlit.app/",
        features: [
            "RNN-Based Sentiment Classification",
            "Real-time Streamlit Web App",
            "Text Preprocessing & Tokenization",
            "Embeddings & Sequence Modeling",
            "High Accuracy Model (~87%)",
            "Interactive UI for User Input"
        ]
    },
    {
        id: 6,
        title: "LSTM Next Word Predictor",
        description: "NLP model using LSTM to predict the next word in a sequence of text.",
        techStack: ["TensorFlow", "Keras", "Streamlit", "Python"],
        category: "Deep Learning",
        github: "https://github.com/shreyashkashyapanand01/LSTM_nextWordPredictor",
        demo: null,
        features: [
            "Next Word Prediction",
            "Text Generation",
            "LSTM Architecture",
            "Interactive UI"
        ]
    }
];

// Routes
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Configure Nodemailer
    // NOTE: In production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your preferred service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `Portfolio Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        // Only send if credentials are present, otherwise mock success for demo
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } else {
            console.log('Email credentials missing, mocking success. Message:', message);
        }
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
