import React from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Github, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone & WhatsApp",
      value: "+91 6302232504",
      href: "https://wa.me/916302232504",
      color: "text-green-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sainathgade8@gmail.com",
      href: "mailto:sainathgade8@gmail.com",
      color: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sainath-gade-02ba5b2a3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMosAAhxVRPy%2BdDlXSJthQA%3D%3D",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Sainath-gade-456/",
      color: "hover:text-gray-400"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/sainath_patel__?igsh=cXE1NmtuOWtwY3o0",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss the future of AI and technology? 
            Let's start a conversation!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <div className={`${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-400 font-medium">Location</span>
                  </div>
                  <p className="text-gray-300">Jayamukhi Institute of Technological Sciences</p>
                  <p className="text-gray-400 text-sm">CSE (AI & ML) Department</p>
                </div>
              </div>
            </div>

            {/* Right Column - Social Links & CTA */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-6">Follow My Journey</h3>
                
                <div className="grid gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group ${link.color}`}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="text-white font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-2xl border border-cyan-500/20">
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Innovate Together?</h4>
                <p className="text-gray-300 mb-6">
                  I'm always excited to collaborate on projects involving AI, ML, or any innovative 
                  technology solutions. Whether it's a team project, internship, or just a tech discussion, 
                  I'd love to connect!
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/916302232504"
                    className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:sainathgade8@gmail.com"
                    className="flex items-center gap-2 border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;