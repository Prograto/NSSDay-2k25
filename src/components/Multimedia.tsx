import React from 'react';
import { Play, Image, Star } from 'lucide-react';
import yogaimg from '../images/yoga.png'
import independence from '../images/independence.png'
import nssday from '../images/nssday.png'
import republicday from '../images/republicday.png'
import nsspost from '../images/brochure.png'
import colab from '../images/colab.png'
import guest from '../images/guest.png'
import nssvideo from '../images/nssday.mp4'

const Multimedia: React.FC = () => {
  const highlights = [
    {
      title: "Yoga and Wellness Camp",
      description: "NSS volunteers organizing yoga and wellness sessions for students",
      url: yogaimg
    },
    {
      title: "Independence Day Celebration",
      description: "Flag hoisting and cultural programs by NSS volunteers",
      url: independence
    },
    {
      title: "NSS Day Celebration",
      description: "Celebrating the spirit of NSS and its contributions to society",
      url: nssday
    },
    {
      title: "Republic Day Celebration",
      description: "Celebrating the spirit of the nation and its diversity",
      url: republicday
    },
    {
      title: "NSS & NCC Colab",
      description: "Collaborative initiatives between NSS and NCC for community service",
      url: colab
    },
    {
      title: "Shri M. Ramakrishna",
      description: "Regional Director for the National Service Scheme (NSS) Andhra Pradesh and Telangana",
      url: guest
    }
  ];

  return (
    <section id="multimedia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-6">
            NSS in Action
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Witness the impact of our volunteers through videos and photo highlights
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl p-8 shadow-xl">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                <video
                  controls
                  poster={nsspost}
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source src={nssvideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute bottom-6 left-8 text-white drop-shadow-lg">
                <h3 className="text-2xl font-bold mb-1">NSS Day 2025 - Highlights</h3>
                <p className="text-sm opacity-90">Watch our journey of service and community development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Highlights */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Image className="w-8 h-8 mr-3 text-orange-600" />
              Photo Highlights
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={highlight.url}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multimedia;
