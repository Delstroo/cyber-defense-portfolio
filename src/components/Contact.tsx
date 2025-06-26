
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! I will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSocialClick = (platform: string) => {
    alert(`Opening ${platform} profile...`);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-neural-aurora" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 100, 255, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg animate-title-glitch">
            <span className="relative">
              Get In Touch
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-text-corruption opacity-20"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-cyan-400/20 animate-text-fade transition-all duration-500 hover:bg-black/30 hover:border-blue-400/30">
            Ready to work together? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-cyan-400/30 shadow-lg animate-contact-boot transition-all duration-500 hover:bg-black/30 hover:border-blue-400/40 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-lg">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 animate-contact-item">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 shadow-lg">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 animate-contact-item" style={{ animationDelay: '0.1s' }}>
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 shadow-lg">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 animate-contact-item" style={{ animationDelay: '0.2s' }}>
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 shadow-lg">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-blue-400/30 shadow-lg animate-contact-boot transition-all duration-500 hover:bg-black/30 hover:border-cyan-400/40 hover:scale-105" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 drop-shadow-lg">Connect With Me</h3>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 group border border-blue-500/30 hover:scale-110 shadow-lg transform hover:-translate-y-1 animate-social-pulse"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => handleSocialClick('GitHub')}
                  className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:bg-gray-500/30 transition-all duration-300 group border border-gray-500/30 hover:scale-110 shadow-lg transform hover:-translate-y-1 animate-social-pulse" style={{ animationDelay: '0.1s' }}
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => handleSocialClick('Twitter')}
                  className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition-all duration-300 group border border-cyan-500/30 hover:scale-110 shadow-lg transform hover:-translate-y-1 animate-social-pulse" style={{ animationDelay: '0.2s' }}
                >
                  <Twitter className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-black/30 backdrop-blur-sm border border-purple-400/40 shadow-xl hover:border-cyan-400/40 hover:shadow-2xl transition-all duration-500 animate-form-boot hover:scale-105" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-white text-2xl drop-shadow-lg">Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name" 
                    className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 text-white placeholder:text-gray-500 hover:border-cyan-400/50 focus:border-cyan-400/70 transition-all duration-300 shadow-md" 
                  />
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name" 
                    className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 text-white placeholder:text-gray-500 hover:border-cyan-400/50 focus:border-cyan-400/70 transition-all duration-300 shadow-md" 
                  />
                </div>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 text-white placeholder:text-gray-500 hover:border-cyan-400/50 focus:border-cyan-400/70 transition-all duration-300 shadow-md mb-4" 
                />
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 text-white placeholder:text-gray-500 hover:border-cyan-400/50 focus:border-cyan-400/70 transition-all duration-300 shadow-md mb-4" 
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..." 
                  className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 text-white placeholder:text-gray-500 min-h-[120px] hover:border-cyan-400/50 focus:border-cyan-400/70 transition-all duration-300 shadow-md mb-4" 
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg border border-cyan-400/30 backdrop-blur-sm transform hover:-translate-y-1 animate-button-pulse"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
