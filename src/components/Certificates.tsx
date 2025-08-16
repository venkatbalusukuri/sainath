import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Python Essential 1",
      issuer: "Cisco Netcad Academy",
      date: "2024",
      description: "Comprehensive foundation in Python programming, covering fundamental concepts, data structures, and programming methodologies.",
      skills: ["Python Basics", "Data Structures", "Programming Logic", "Problem Solving"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 mb-8"
            >
              <div className="flex items-start gap-6">
                <div className={`bg-gradient-to-r ${cert.color} p-4 rounded-xl`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="text-cyan-400 font-medium">{cert.issuer}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Learning Goals */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Next Learning Goals</h3>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing advanced certifications in <span className="text-cyan-400 font-medium">Data Science</span>, 
              <span className="text-purple-400 font-medium"> Machine Learning</span>, and 
              <span className="text-pink-400 font-medium"> AI Technologies</span> to further enhance my expertise 
              in cutting-edge technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;