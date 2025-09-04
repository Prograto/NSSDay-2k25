import React from 'react';
import { Calendar } from 'lucide-react';
import assembly from '../images/assembly.png';
import bloodcamp from '../images/bloodcamp.png';
import medicalcamp from '../images/medicalcamp.png';

interface KeyEventsProps {
  onRegister: (eventName: string, formLink: string) => void;
}

const KeyEvents: React.FC<KeyEventsProps> = ({ onRegister }) => {
  const events = {
    main: {
      title: 'Swarnandhra Student Assembly',
      date: 'September 25, 2025',
      description:
        'A grand assembly bringing together students to discuss leadership, innovation, and community initiatives.',
      image: assembly,
      register: true,
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfpwHHbBfaH5vzXc0zn0Ij3fZPHQluLFt_AkT7nYo2xRoZyqw/viewform?usp=header', 
    },
    side: [
      {
        title: 'Mega Blood Camp',
        date: 'September 26, 2025',
        description:
          'Join us for a life-saving blood donation drive and contribute to a healthier community.',
        image: bloodcamp,
        register: false,
        formLink: '',
      },
      {
        title: 'Medical Camp',
        date: 'September 27, 2025',
        description:
          'A free health check-up and medical awareness camp to promote well-being in our community.',
        image: medicalcamp,
        register: false,
        formLink: '',
      },
    ],
  };

  return (
    <section id="key-events" className="py-12 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Key Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* LEFT MAIN POSTER */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-[500px] overflow-hidden">
              <img
                src={events.main.image}
                alt={events.main.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{events.main.title}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{events.main.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{events.main.description}</p>
              {events.main.register && (
                <button
                  onClick={() => onRegister(events.main.title, events.main.formLink)}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-xl hover:opacity-90 transition"
                >
                  Register Now
                </button>
              )}
            </div>
          </div>

          {/* RIGHT SMALL CARDS */}
          <div className="flex flex-col gap-6">
            {events.side.map((event, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyEvents;
