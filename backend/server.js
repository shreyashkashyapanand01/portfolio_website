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
        description: "A full-stack personal finance tracker to log income and expenses, categorize spending, and visualize financial data.",
        techStack: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
        category: "Web Dev",
        github: "https://github.com/shreyashkashyapanand01/CashFlow",
        demo: null,
        features: ["Income & Expense Tracking", "Data Visualization", "JWT Authentication"]
    },
    {
        id: 2,
        title: "College Major Project 1",
        description: "AI Research Agent that automates research and generates comprehensive reports using multi-agent architecture.",
        techStack: ["Node.js", "Gemini API", "Tavily API", "Puppeteer"],
        category: "AI/Agentic",
        github: "https://github.com/shreyashkashyapanand01/collegeMajorProject1",
        demo: null,
        features: ["Multi-agent Research", "Automated Report Generation", "Web Scraping"]
    },
    {
        id: 3,
        title: "Earthly",
        description: "A sustainable lifestyle platform promoting eco-friendly habits and products.",
        techStack: ["React", "Node.js", "MongoDB"],
        category: "Web Dev",
        github: "https://github.com/shreyashkashyapanand01/Earthly",
        demo: null,
        features: ["Eco-friendly Marketplace", "Sustainability Tips"]
    },
    {
        id: 4,
        title: "Network Security ML",
        description: "Machine Learning pipeline for network intrusion detection and security analysis.",
        techStack: ["Python", "Scikit-learn", "FastAPI", "Docker"],
        category: "Machine Learning",
        github: "https://github.com/shreyashkashyapanand01/Network_Security_ML",
        demo: null,
        features: ["Intrusion Detection", "Traffic Analysis", "MLflow Tracking"]
    },
    {
        id: 5,
        title: "RNN IMDB Sentiment",
        description: "Deep Learning model for sentiment analysis on IMDB movie reviews using Recurrent Neural Networks.",
        techStack: ["TensorFlow", "Keras", "Streamlit", "Python"],
        category: "Deep Learning",
        github: "https://github.com/shreyashkashyapanand01/RNN_IMDB",
        demo: "https://imdbsentimentalanalysisrnn.streamlit.app/",
        features: ["Sentiment Classification", "Real-time Prediction", "Streamlit UI"]
    },
    {
        id: 6,
        title: "LSTM Next Word Predictor",
        description: "NLP model using LSTM to predict the next word in a sequence of text.",
        techStack: ["TensorFlow", "Keras", "Streamlit", "Python"],
        category: "Deep Learning",
        github: "https://github.com/shreyashkashyapanand01/LSTM_nextWordPredictor",
        demo: null,
        features: ["Next Word Prediction", "Text Generation", "LSTM Architecture"]
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
