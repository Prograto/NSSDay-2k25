import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsEventsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b-2 border-orange-500">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-gray-1000">NSS Day 2025</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('key-events')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Key Events
            </button>
            {/* Events Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-orange-600 transition-colors font-medium"
                onMouseEnter={() => setIsEventsDropdownOpen(true)}
                onMouseLeave={() => setIsEventsDropdownOpen(false)}
              >
                Events <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                  isEventsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsEventsDropdownOpen(true)}
                onMouseLeave={() => setIsEventsDropdownOpen(false)}
              >
                <div className="p-4">
                  <h3 className="font-semibold text-orange-600 mb-2">Creative & Social Initiatives</h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <div>Best out of Waste</div>
                    <div>Social Sparks</div>
                    <div>Untold Story</div>
                    <div>Vision through Lens</div>
                    <div>Handloom Harmony</div>
                  </div>
                  
                  <h3 className="font-semibold text-green-600 mb-2">Academic & Skill-Based</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Poster Presentation</div>
                    <div>SI Writing</div>
                    <div>Elocution</div>
                    <div>PPT Presentation</div>
                    <div>Quiz</div>
                    <div>Mind Mapping</div>
                    <div>Words of War</div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
