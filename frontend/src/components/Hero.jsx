import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 border border-primary-500/20"
                    >
                        Available for Work
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Shreyash Kashyap</span>
                    </h1>

                    <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light h-[60px]">
                        I am a <br />
                        <span className="font-semibold text-secondary-600 dark:text-secondary-400">
                            <TypeAnimation
                                sequence={[
                                    'Spring Boot Backend Developer',
                                    2000,
                                    'Machine Learning Explorer',
                                    2000,
                                    'Generative AI Enthusiast',
                                    2000,
                                    'Agentic AI Enthusiast',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
                        Building intelligent AI systems and scalable backend solutions.
                        Specializing in Agentic AI, Generative AI, Machine Learning and Spring Boot.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="projects" smooth={true} duration={500}>
                            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all flex items-center gap-2 group">
                                View Projects
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors flex items-center gap-2">
                                Download CV
                                <Download size={20} />
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Abstract 3D-like Shape or Profile Image Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-secondary-500/30 rounded-[2rem] rotate-6 backdrop-blur-sm" />
                        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden flex items-center justify-center">
                            {/* Placeholder for 3D element or Profile Pic */}
                            <div className="text-center p-8">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-500/20">
                                    <img
                                        src="/profile.png"
                                        alt="Shreyash Kashyap"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/150?text=SK"; // Fallback
                                        }}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Innovation First</h3>
                                <p className="text-gray-500">Crafting digital solutions that matter.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
