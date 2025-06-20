import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/ChatGPT Image May 23, 2025, 01_42_34 AM copy.png" 
              alt="Trench Trackers Logo" 
              className="h-10 w-10 rounded-full border-2 border-blue-400/50"
            />
            <span className="text-2xl font-bold text-white">Trench Trackers</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className={`text-lg font-medium transition-colors duration-200 ${
                isActive('/features') 
                  ? 'text-blue-400' 
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-lg font-medium transition-colors duration-200 ${
                isActive('/pricing') 
                  ? 'text-blue-400' 
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/support" 
              className={`text-lg font-medium transition-colors duration-200 ${
                isActive('/support') 
                  ? 'text-blue-400' 
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              Support
            </Link>
          </div>

          <a 
            href="https://discord.gg/TrenchTrackers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Join Our Discord
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;