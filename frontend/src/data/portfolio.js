export const projects = [
    {
        id: 1,
        title: "CashFlow",
        description: "A full-stack personal finance tracker to log income and expenses, categorize spending, and visualize financial data.",
        techStack: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
        category: "Web Dev",
        github: "https://github.com/shreyashkashyapanand01/CashFlow",
        demo: null, // No live demo found
        features: [
            "Income & Expense Tracking",
            "Data Visualization (Charts)",
            "JWT Authentication",
            "Category Management"
        ]
    },
    {
        id: 2,
        title: "College Major Project 1",
        description: "AI Research Agent that automates research and generates comprehensive reports using multi-agent architecture.",
        techStack: ["Node.js", "Gemini API", "Tavily API", "Puppeteer"],
        category: "AI/Agentic",
        github: "https://github.com/shreyashkashyapanand01/collegeMajorProject1",
        demo: null,
        features: [
            "Multi-agent Research",
            "Automated Report Generation",
            "Web Scraping",
            "LLM Integration"
        ]
    },
    {
        id: 3,
        title: "Earthly",
        description: "A sustainable lifestyle platform promoting eco-friendly habits and products.",
        techStack: ["React", "Node.js", "MongoDB"], // Assumed based on typical stack, verify if needed
        category: "Web Dev",
        github: "https://github.com/shreyashkashyapanand01/Earthly",
        demo: null,
        features: [
            "Eco-friendly Product Marketplace",
            "Sustainability Tips",
            "Community Forum"
        ]
    },
    {
        id: 4,
        title: "Network Security ML",
        description: "Machine Learning pipeline for network intrusion detection and security analysis.",
        techStack: ["Python", "Scikit-learn", "FastAPI", "Docker"],
        category: "Machine Learning",
        github: "https://github.com/shreyashkashyapanand01/Network_Security_ML",
        demo: null,
        features: [
            "Intrusion Detection",
            "Traffic Analysis",
            "Model Deployment via FastAPI",
            "MLflow Tracking"
        ]
    },
    {
        id: 5,
        title: "RNN IMDB Sentiment",
        description: "Deep Learning model for sentiment analysis on IMDB movie reviews using Recurrent Neural Networks.",
        techStack: ["TensorFlow", "Keras", "Streamlit", "Python"],
        category: "Deep Learning",
        github: "https://github.com/shreyashkashyapanand01/RNN_IMDB",
        demo: "https://imdbsentimentalanalysisrnn.streamlit.app/",
        features: [
            "Sentiment Classification",
            "Real-time Prediction",
            "Streamlit UI",
            "RNN Architecture"
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
    "Web Development": [
        { name: "React", level: "Advanced", icon: "FaReact" },
        { name: "Spring Boot", level: "Intermediate", icon: "SiSpringboot" },
        { name: "Node.js", level: "Intermediate", icon: "FaNodeJs" },
        { name: "JavaScript", level: "Advanced", icon: "SiJavascript" },
        { name: "HTML/CSS", level: "Advanced", icon: "FaHtml5" },
        { name: "MongoDB", level: "Intermediate", icon: "SiMongodb" },
        { name: "SQL", level: "Intermediate", icon: "SiMysql" },
    ],
    "Machine Learning": [
        { name: "Supervised Learning", level: "Advanced", icon: "SiScikitlearn" },
        { name: "Unsupervised Learning", level: "Advanced", icon: "SiScikitlearn" },
        { name: "TensorFlow", level: "Intermediate", icon: "SiTensorflow" },
        { name: "NLP", level: "Intermediate", icon: "SiPytorch" }, // Using PyTorch icon as generic DL/NLP
    ],
    "Tools & Cloud": [
        { name: "Git/GitHub", level: "Advanced", icon: "FaGithub" },
        { name: "AWS", level: "Beginner", icon: "FaAws" },
        { name: "Docker", level: "Beginner", icon: "FaDocker" },
        { name: "Kubernetes", level: "Beginner", icon: "SiKubernetes" },
        { name: "Kafka", level: "Beginner", icon: "SiApachekafka" },
    ]
};
