import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

// Helper to dynamically load icons
const IconComponent = ({ name }) => {
    const Icon = FaIcons[name] || SiIcons[name];
    return Icon ? <Icon size={24} /> : null;
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, categorySkills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass dark:glass-dark p-8 rounded-2xl hover:neumorph transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400 border-b border-gray-200 dark:border-gray-700 pb-2">
                                {category}
                            </h3>

                            <div className="space-y-6">
                                {categorySkills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    <IconComponent name={skill.icon} />
                                                </span>
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-500">{skill.level}</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '75%' : '50%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`h-full rounded-full ${category === 'Web & Backend Development' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                                                    category === 'AI & Machine Learning' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                                                        'bg-gradient-to-r from-orange-500 to-yellow-500'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
