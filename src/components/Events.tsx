import React from "react";
import {
  Calendar,
  Award,
  Camera,
  Palette,
  Lightbulb,
  Mic,
  FileText,
  Brain,
} from "lucide-react";

interface EventsProps {
  onRegister: (eventName: string, formLink: string) => void;
}

interface EventType {
  name: string;
  description: string;
  icon: JSX.Element;
  color: string;
  formLink: string;
}

const Events: React.FC<EventsProps> = ({ onRegister }) => {
  const creativeEvents: EventType[] = [
    {
      name: "Best out of Waste",
      description: "Transform waste materials into creative and useful products",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSftsK0Yq3AdOhXY66RMQ0XQkTnUfxUPauMxIvTOLlGGdkRNJw/viewform",
    },
    {
      name: "Social Sparks",
      description: "Innovative social initiatives for community development",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfhLqY8Vq1qckEQK_gc4wSWNB_LVQqBqPyfrk55mQzKzg0u_w/viewform?usp=header",
    },
    {
      name: "Untold Story",
      description: "My village, My spiritual Roots, My India",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeKIOGUAkeNYyT9GXVOY7OsDhWj_5LQOy4B69HuSrTenBXitQ/viewform?usp=header",
    },
    {
      name: "Vision through Lens",
      description: "Identify the photo and explain its social relevance",
      icon: <Camera className="w-8 h-8" />,
      color: "from-teal-500 to-green-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScwWacsjvdTwFW1dmer0Mn3K3obmDoDJwwKu1UZEUkQGWW1Ow/viewform?usp=header",
    },
    {
      name: "Handloom Harmony – Seetharamapuram Lace",
      description: "Showcase traditional handloom artistry and craftsmanship",
      icon: <Award className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScEQ8aBO-ub8NZtsqlHJRTHx3JHzwbxnKPk7wruAdT_o-JJew/viewform",
    },
    {
      name: "Drawing",
      description: "Express your creativity through drawing",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfLD_e9cmxUCVWKzY33QpWWxdnW-lqjeecQ7Remqva3XMpQgg/viewform?usp=header",
    },
    {
      name: "Memes Presentation",
      description: "Create and share your own memes on social impact",
      icon: <Camera className="w-8 h-8" />,
      color: "from-teal-500 to-green-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdYamsDB8CsorEmkVa3Pr_BSvy89Sr96aTgnsuBNKKMup9YAw/viewform?usp=header",
    },
  ];

  const academicEvents: EventType[] = [
    {
      name: "Poster Presentation",
      description: "Visual presentations on Constitution & Laws",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd7Gm063UItcNwIoebt_akJUiChe6cX_SjgiztvIVvJiZBRmw/viewform?usp=header",
    },
    {
      name: "Essay Writing",
      description: "Drug abuse among youth - How to prevent it?",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeBZIL79C7094Uv8lkiW3KLSKVwrKTrcd5mhFrn0_V7NXRyPg/viewform?usp=header",
    },
    {
      name: "Elocution",
      description: "My Vision of India in 2047",
      icon: <Mic className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRlaevcq5nMyJP6PWYJ9NtfxtLF8yPkHoVOBEIRUvtx1Slzg/viewform?usp=header",
    },
    {
      name: "PPT Presentation",
      description:
        "AI Effect on Society, How to prevent Cyber crimes?, Need of Entrepreneurship, Women safety",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSextmj1OqocpTRu3T7ccGQWQRR0ckaTQ8t0Y0KaNqfDviiGTQ/viewform",
    },
    {
      name: "Quiz",
      description: "General knowledge and current affairs quiz",
      icon: <Brain className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfaXGQdzo3HzhWyS-ErGdkFGlZE1oUbO39FapjM90oKhmLIgQ/viewform?usp=header",
    },
    {
      name: "Mind Mapping",
      description: "Visual thinking and idea organization challenge",
      icon: <Brain className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScYtDfwt_GhmCeEjJ0wj3wTtJsp_3mwd8CEHHuBprhx3jIXDA/viewform?usp=header",
    },
    {
      name: "Words of War",
      description: "Competition on related words",
      icon: <Mic className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeuyhbaZIlRQ8Jo7KSFMOH_NUcvJVTUsRHoGcJ8PqR-M6G31g/viewform?usp=header",
    },
  ];

  const EventCard: React.FC<{ event: EventType; index: number }> = ({
    event,
    index,
  }) => (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="p-6 relative z-10">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          {event.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          {event.name}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {event.description}
        </p>
        <button
          onClick={() => onRegister(event.name, event.formLink || "")}
          className={`w-full px-6 py-3 bg-gradient-to-r ${event.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}
        >
          <Calendar className="w-4 h-4" />
          <span>Register Now</span>
        </button>
      </div>
    </div>
  );

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-gray-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-6">
            Events & Competitions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Participate in diverse competitions that foster creativity, social
            awareness, and academic excellence
          </p>
        </div>

        {/* Creative Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-orange-600 mb-4 flex items-center justify-center">
              <Palette className="w-8 h-8 mr-3" />
              Creative & Social Initiatives
            </h3>
            <div className="w-16 h-0.5 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeEvents.map((event, index) => (
              <EventCard key={event.name} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Academic Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-600 mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 mr-3" />
              Academic & Skill-Based Competitions
            </h3>
            <div className="w-16 h-0.5 bg-green-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicEvents.map((event, index) => (
              <EventCard key={event.name} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
