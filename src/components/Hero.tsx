import React, { useState } from 'react';
import { Calendar, FileText, X } from 'lucide-react';
import brochureImg from '../images/brochure.png';
import leftLogo from '../images/left-logo.png';
import rightLogo from '../images/right-logo.png';

interface HeroProps {
  onRegister: (eventName: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-10"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-6 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-32 right-8 w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-24 left-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 rounded-full opacity-20 animate-ping"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Title & Logos */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {/* Left Logo */}
            <img
              src={leftLogo}
              alt="Left Logo"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
            />

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent mb-2 sm:mb-4 animate-fade-in">
                NSS DAY
              </h1>
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
                2025
              </div>
            </div>

            {/* Right Logo */}
            <img
              src={rightLogo}
              alt="Right Logo"
              className="w-28 h-20 sm:w-32 sm:h-28 md:w-36 md:h-32 object-contain"
            />
          </div>
        </div>

        {/* Marquee Text */}
        <div className="mb-8 sm:mb-12 overflow-hidden bg-gradient-to-r from-orange-500 to-green-500 py-3 sm:py-4 rounded-full">
          <div className="animate-marquee whitespace-nowrap">
            {Array(4)
              .fill('Swarnandhra Youth Assembly')
              .map((text, index) => (
                <span
                  key={index}
                  className="text-lg sm:text-2xl md:text-3xl font-bold text-white mx-4 sm:mx-8"
                >
                  {text}
                </span>
              ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>About NSS</span>
          </button>

          <button
            onClick={() => setIsBrochureOpen(true)}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>Main Brochure</span>
          </button>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 sm:mt-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Join us in celebrating the spirit of selfless service and community development
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Brochure Modal */}
      {isBrochureOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative max-w-xl sm:max-w-2xl md:max-w-3xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setIsBrochureOpen(false)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            {/* Brochure Image */}
            <img
              src={brochureImg}
              alt="NSS Day 2025 Brochure"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
