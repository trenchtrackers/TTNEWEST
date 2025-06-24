import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img 
              src="/ChatGPT Image May 23, 2025, 01_42_34 AM copy.png" 
              alt="Trench Trackers Logo" 
              className="h-10 w-10 rounded-full border-2 border-blue-400/50"
            />
            <span className="text-2xl font-bold text-white">Trench Trackers</span>
          </Link>
          
          {/* Desktop Navigation */}
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

          {/* Desktop CTA Button */}
          <a 
            href="https://discord.gg/TrenchTrackers"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Join Our Discord
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-blue-500/20 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                onClick={closeMobileMenu}
                className={`text-lg font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${
                  isActive('/features') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-slate-300 hover:text-blue-400 hover:bg-white/5'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                onClick={closeMobileMenu}
                className={`text-lg font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${
                  isActive('/pricing') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-slate-300 hover:text-blue-400 hover:bg-white/5'
                }`}
              >
                Pricing
              </Link>
              <Link 
                to="/support" 
                onClick={closeMobileMenu}
                className={`text-lg font-medium transition-colors duration-200 px-4 py-2 rounded-lg ${
                  isActive('/support') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-slate-300 hover:text-blue-400 hover:bg-white/5'
                }`}
              >
                Support
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-blue-500/20">
                <a 
                  href="https://discord.gg/TrenchTrackers"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-center"
                >
                  Join Our Discord
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;