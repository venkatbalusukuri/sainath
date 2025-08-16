import React from 'react';
import { Users, BookOpen, Gamepad2, Target, Zap, Award } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Excellence in leading and motivating teams towards common goals"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Self Motivated",
      description: "Driven by passion and determination to achieve excellence"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Rapidly adapts to new technologies and methodologies"
    }
  ];

  const hobbies = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      name: "Reading Books"
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      name: "Playing Games"
    },
    {
      icon: <Award className="w-5 h-5" />,
      name: "Exploring Tech"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about innovation and always exploring the frontiers of AI and Machine Learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently pursuing B.Tech in Computer Science Engineering (AI & ML) at 
                <span className="text-cyan-400 font-medium"> Jayamukhi Institute of Technological Sciences</span>. 
                As a 3rd-year student, I'm passionate about leveraging cutting-edge technologies to create 
                innovative solutions that can transform industries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm deeply fascinated by the potential of AI tools and technologies. Currently diving deep into 
                <span className="text-purple-400 font-medium"> Data Science and Machine Learning</span>, 
                always seeking to understand how these technologies can be applied to solve real-world problems.
              </p>
            </div>

            {/* Hobbies */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Hobbies & Interests</h4>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex items-center gap-2 bg-purple-500/10 px-3 py-2 rounded-full border border-purple-500/20">
                    {hobby.icon}
                    <span className="text-purple-300 text-sm">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Qualities */}
          <div className="space-y-6">
            {qualities.map((quality, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    {quality.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{quality.title}</h4>
                    <p className="text-gray-400">{quality.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;