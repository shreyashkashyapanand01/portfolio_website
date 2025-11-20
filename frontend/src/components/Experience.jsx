import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    const experience = [
        {
            id: 1,
            type: 'education',
            title: 'B.Tech in Computer Science',
            org: 'KIIT University',
            period: '2021 - 2025',
            desc: 'Specializing in Artificial Intelligence and Machine Learning. 8th Semester student.',
            icon: <GraduationCap size={20} />
        },
        {
            id: 2,
            type: 'work',
            title: 'Full Stack Developer Intern',
            org: 'Tech Company (Placeholder)',
            period: 'Summer 2024',
            desc: 'Worked on React and Node.js applications. Implemented new features and optimized performance.',
            icon: <Briefcase size={20} />
        }
    ];

    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Experience & <span className="text-gradient">Education</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex gap-4"
                        >
                            <div className={`p-3 rounded-full h-fit ${item.type === 'education' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'}`}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{item.org}</p>
                                <p className="text-sm text-gray-500 mb-3">{item.period}</p>
                                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
