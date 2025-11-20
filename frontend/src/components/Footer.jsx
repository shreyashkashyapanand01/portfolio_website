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
                    <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:shreyashkashyap@example.com" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-sm text-gray-500 flex items-center gap-1">
                    <span>Made with</span>
                    <Heart size={14} className="text-red-500 fill-red-500" />
                    <span>by Shreyash Kashyap</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
