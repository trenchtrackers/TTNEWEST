import React from 'react';
import { Twitter, MessageSquare, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src="/ChatGPT Image May 23, 2025, 01_42_34 AM copy.png" 
              alt="Trench Trackers Logo" 
              className="h-8 w-8 rounded-full border-2 border-blue-400/50"
            />
            <span className="text-2xl font-bold text-white">Trench Trackers</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://x.com/trenchtrackers" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="https://discord.gg/trenchtrackers" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <MessageSquare className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors duration-200">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-500/20 text-center">
          <p className="text-slate-400">
            © 2025 Trench Trackers. All rights reserved. Built for serious crypto traders.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;