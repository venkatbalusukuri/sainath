import React from 'react';
import { ChevronDown, Cpu, Brain, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Hello, I'm</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Gade Sainath
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                AI & ML Enthusiast | Innovation Explorer
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              B.Tech 3rd Year Student at Jayamukhi Institute of Technological Sciences, 
              passionate about revolutionizing the world through AI and Machine Learning innovations.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400">AI & ML</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                <Code2 className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400">Innovation</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 px-4 py-2 rounded-full border border-green-500/30">
                <Cpu className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Technology</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="#about"
                className="border border-cyan-500/50 text-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-30 animate-spin-slow"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center border-2 border-cyan-500/30">
                <img
                  src="https://tse4.mm.bing.net/th/id/OIP.QElp_v7Q4VurAi0eVZNgdgHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Gade Sainath"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
