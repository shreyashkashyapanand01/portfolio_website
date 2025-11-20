import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-dark-card border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold font-heading text-gradient mb-1">SK.</h3>
                    <p className="text-sm text-gray-500">Building the future with code & AI.</p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/shreyashkashyapanand01" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://in.linkedin.com/in/shreyash-kashyap-45346725b" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:shreyashkashyapanand@gmail.com" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="flex flex-col items-center md:items-end gap-1">
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        <span>by Shreyash Kashyap</span>
                    </div>
                    <p className="text-xs text-gray-400">Last updated: November 20, 2025</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
