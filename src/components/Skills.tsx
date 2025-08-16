import React, { useState, useEffect } from 'react';
import { Code, Database, GitBranch, Cpu } from 'lucide-react';

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "Python", level: 85 },
        { name: "Java (Basics)", level: 65 },
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Data Science", level: 70 },
        { name: "Machine Learning", level: 65 },
        { name: "AI Tools Integration", level: 80 },
        { name: "Python for ML", level: 75 }
      ]
    },
    {
      category: "Development Tools",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      items: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "Version Control", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuously evolving skill set focused on AI, ML, and modern development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg w-fit mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animateProgress ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Focus Area */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-2xl border border-cyan-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Current Focus</h3>
            <p className="text-gray-300 leading-relaxed">
              Actively learning <span className="text-purple-400 font-medium">Data Science</span> and 
              <span className="text-pink-400 font-medium"> Machine Learning</span>, with a particular 
              interest in integrating AI tools into practical applications. Always exploring new 
              technologies and their potential for innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;