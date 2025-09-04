import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calendar, Users, Award, Phone, Mail, MapPin, Play, Key } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Multimedia from './components/Multimedia';
import Contact from './components/Contact';
import Modal from './components/Modal';
import Confetti from './components/Confetti';
import KeyEvents from './components/KeyEvents';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{ name: string; formLink: string }>({
    name: '',
    formLink: '',
  });

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (eventName: string, formLink: string) => {
    setSelectedEvent({ name: eventName, formLink });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {showConfetti && <Confetti />}
      
      <Header />
      
      <main>
        <Hero />
        <KeyEvents onRegister={openModal} />
        <About />
        <Events onRegister={openModal} />
        <Multimedia />
        <Contact />
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        eventName={selectedEvent.name}
        formLink={selectedEvent.formLink}
      />
    </div>
  );
}

export default App;
