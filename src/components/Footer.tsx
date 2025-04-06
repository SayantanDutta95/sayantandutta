
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-bold">Academic Portfolio</h3>
            <p className="text-blue-200 mt-2">Showcasing research and expertise</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {year} Academic Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
