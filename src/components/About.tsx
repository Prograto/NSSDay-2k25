import React from 'react';
import { Heart, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-6">
            About NSS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-green-500"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-orange-500 mr-3" />
                  "Not Me, But You"
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The theme of the NSS is embodied in its motto, "Not Me, But You," which reflects a philosophy of selfless service and a commitment to the welfare of the community above individual interests.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-green-500"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-green-500 mr-3" />
                  Community Development
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  From this viewpoint, the NSS aims to develop volunteers who are socially responsible, empathetic, and equipped to mobilize community participation for national development.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-orange-600 mb-2">300</h4>
                  <p className="text-gray-600">Volunteers</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-green-600 mb-2">25+</h4>
                  <p className="text-gray-600">Communities</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-orange-600 mb-2">10</h4>
                  <p className="text-gray-600">Years</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-green-600 mb-2">20</h4>
                  <p className="text-gray-600">Projects</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-500 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;