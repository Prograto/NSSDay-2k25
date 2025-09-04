import React from 'react';
import { MapPin, Phone, Mail, Clock, Award, Users } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with us for more information about NSS activities and events
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                NSS Unit Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Swarnandhra College of Engineering & Technology<br />
                      Seetharamapuram, Narsapur<br />
                      West Godavari, Andhra Pradesh - 534280
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      J. Leela Sri Ram (NSS Secretary) - +91 63057 37463<br />
                      A. S. V. Narasimha (Executive Member) - +91 79814 87676<br />
                      A. Chandra Sekhar (Executive Member) - +91 8096381549
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">
                      nss@swarnandhra.ac.in<br />
                      nss2k25@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 4:10 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NSS Coordinators */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="w-6 h-6 text-green-600 mr-3" />
                NSS Coordinators
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800">Mr. V. Manikyalarao</h4>
                  <p className="text-sm text-gray-600">NSS Programme Officer - I</p>
                  <p className="text-sm text-orange-600">vissamanikyalarao@gmail.com</p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800">Mr. M. V. Krishna Mohan</h4>
                  <p className="text-sm text-gray-600">NSS Programme Officer - II</p>
                  <p className="text-sm text-green-600">mv.krishnamohan@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map/Visual Element */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="h-96 bg-gradient-to-br from-orange-100 to-green-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Campus</h3>
                <p className="text-gray-600 mb-6 max-w-sm">
                  Join us at our beautiful campus in Seetharamapuram for NSS activities and events
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <a href="https://maps.app.goo.gl/bZCdVUjtPK4AcjnE7">Get Directions</a>
                </button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-green-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute top-1/3 left-4 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-ping"></div>
            </div>
          </div>
          <a href="https://www.swarnandhra.ac.in/">Our Official College Website</a>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join the NSS community and be part of meaningful social change
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
