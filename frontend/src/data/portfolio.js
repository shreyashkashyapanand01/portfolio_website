export const projects = [
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

export const skills = {
    "AI & Machine Learning": [
        { name: "Supervised Learning", level: "Advanced", icon: "SiScikitlearn" },
        { name: "Unsupervised Learning", level: "Advanced", icon: "SiScikitlearn" },
        { name: "Deep Learning", level: "Intermediate", icon: "SiTensorflow" },
        { name: "NLP", level: "Intermediate", icon: "FaBrain" },
        { name: "Model Deployment", level: "Intermediate", icon: "FaDocker" },
    ],
    "Generative AI & Agentic AI": [
        { name: "LangChain", level: "Advanced", icon: "FaLink" }, // Fallback icon
        { name: "LangGraph", level: "Intermediate", icon: "FaProjectDiagram" },
        { name: "LLMs", level: "Advanced", icon: "SiOpenai" },
        { name: "RAG", level: "Intermediate", icon: "FaDatabase" },
        { name: "AutoGen", level: "Intermediate", icon: "FaRobot" },
        { name: "Vector DBs", level: "Intermediate", icon: "FaDatabase" },
    ],
    "Web & Backend Development": [
        { name: "Java", level: "Advanced", icon: "FaJava" },
        { name: "Spring Boot", level: "Intermediate", icon: "SiSpringboot" },
        { name: "MySQL", level: "Intermediate", icon: "SiMysql" },
        { name: "MongoDB", level: "Intermediate", icon: "SiMongodb" },
        { name: "JavaScript", level: "Advanced", icon: "SiJavascript" },
        { name: "React", level: "Intermediate", icon: "FaReact" },
        { name: "HTML / CSS", level: "Intermediate", icon: "FaHtml5" },
    ],
};
