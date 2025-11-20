import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Brain, Rocket } from 'lucide-react';

const About = () => {
    const timeline = [
        {
            year: '2023',
            title: 'Web Development',
            desc: 'Started with HTML, CSS, JavaScript, and basic frontend development. Built small projects and explored how software comes to life in the browser.',
            icon: <Code size={20} />,
            color: 'bg-blue-500'
        },
        {
            year: '2024',
            title: 'Java Spring Boot Backend Development',
            desc: 'Learned to build scalable REST APIs, microservices, authentication systems, and database-driven applications using Java, Spring Boot, Hibernate/JPA, and MySQL.',
            icon: <Rocket size={20} />,
            color: 'bg-purple-500'
        },
        {
            year: '2025',
            title: 'Machine Learning & Deep Learning',
            desc: 'Explored Python, Scikit-learn, supervised/unsupervised algorithms, and end-to-end ML pipelines. Mastered TensorFlow, CNNs, RNNs, LSTMs, and NLP fundamentals. Built predictive models and worked on text-processing, embeddings, and sequence modeling. This is where my interest in intelligent systems began.',
            icon: <Brain size={20} />,
            color: 'bg-pink-500'
        },
        {
            year: 'Present',
            title: 'GenAI & Agentic AI Engineering',
            desc: 'Specializing in LLMs, RAG systems, LangChain, LangGraph, HuggingFace, and AutoGen. Building multi-agent workflows, autonomous AI systems, and LLM-powered backend integrations.',
            icon: <Rocket size={20} />,
            color: 'bg-orange-500'
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-dark-bg/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        I specialize in building intelligent AI agents and scalable backend applications. With experience in Agentic AI, Generative AI, Machine Learning, and Java Spring Boot, I focus on creating smart, reliable, and high-impact solutions that blend AI innovation with strong engineering principles.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="w-full md:w-5/12" />

                                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-dark-card shadow-lg border-4 border-gray-100 dark:border-gray-800 mb-4 md:mb-0">
                                    <div className={`text-white p-1.5 rounded-full ${item.color}`}>
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="w-full md:w-5/12">
                                    <div className="p-6 bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800 group">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${item.color}`}>
                                                {item.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
