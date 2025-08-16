import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;