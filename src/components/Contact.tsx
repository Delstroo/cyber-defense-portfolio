
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
    alert('Neural message transmitted. Expect contact via secure channel.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSocialClick = (platform: string) => {
    alert(`Accessing ${platform} neural network. Biometric verification required.`);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Cyberpunk aurora background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-neural-aurora" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 0, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      {/* Neural network visualization */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-magenta-400/30 rounded-lg rotate-45 animate-neural-construct shadow-[0_0_30px_rgba(255,0,255,0.3)]"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-cyan-400/30 rounded-full animate-neural-orbit shadow-[0_0_25px_rgba(0,255,255,0.3)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-yellow-400/20 rounded-full animate-neural-pulse shadow-[0_0_50px_rgba(255,255,0,0.2)]"></div>
        
        {/* Additional neural constructs */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-green-400/25 rotate-12 animate-neural-rotate shadow-[0_0_20px_rgba(0,255,0,0.25)]"></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-neural-drift shadow-[0_0_18px_rgba(0,100,255,0.3)]"></div>
        
        {/* Data streams */}
        <div className="absolute top-10 left-1/3 w-1 h-32 bg-gradient-to-b from-cyan-400/40 to-transparent animate-data-stream shadow-[0_0_8px_rgba(0,255,255,0.4)]"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-24 bg-gradient-to-b from-magenta-400/40 to-transparent animate-data-stream-reverse shadow-[0_0_8px_rgba(255,0,255,0.4)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-magenta-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,255,0.5)] animate-title-glitch relative">
            <span className="relative">
              NEURAL INTERFACE
              <div className="absolute inset-0 bg-gradient-to-r from-magenta-400 to-cyan-400 bg-clip-text text-transparent animate-text-corruption opacity-20"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-black/40 p-4 rounded-lg border border-cyan-400/30 animate-text-fade font-mono transition-all duration-500 hover:bg-black/60 hover:border-magenta-400/40">
            READY TO SECURE YOUR NEURAL NETWORK? INITIATE CONTACT PROTOCOL.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-black/40 p-6 rounded-lg border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.3)] animate-contact-boot transition-all duration-500 hover:bg-black/60 hover:border-magenta-400/50 hover:scale-105 relative overflow-hidden">
              {/* Neural grid overlay */}
              <div className="absolute inset-0 opacity-10 animate-subtle-glitch" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,255,0.1) 10px, rgba(0,255,255,0.1) 20px)',
              }}></div>
              
              <h3 className="text-2xl font-mono font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] relative z-10">CONTACT PROTOCOLS</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-black/60 backdrop-blur-sm border-2 border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-105 hover:-translate-y-1 animate-contact-item">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 hover:scale-110 animate-icon-pulse">
                    <Mail className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">Neural Mail</p>
                    <p className="text-white font-mono">neural@cyberpunk.net</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-black/60 backdrop-blur-sm border-2 border-green-400/30 hover:border-green-400/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:scale-105 hover:-translate-y-1 animate-contact-item" style={{ animationDelay: '0.1s' }}>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border-2 border-green-500/50 shadow-[0_0_20px_rgba(0,255,0,0.4)] transition-all duration-300 hover:scale-110 animate-icon-pulse">
                    <Phone className="w-6 h-6 text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">Neural Link</p>
                    <p className="text-white font-mono">+1 (555) 2077-HACK</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-black/60 backdrop-blur-sm border-2 border-magenta-400/30 hover:border-magenta-400/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:scale-105 hover:-translate-y-1 animate-contact-item" style={{ animationDelay: '0.2s' }}>
                  <div className="w-12 h-12 bg-magenta-500/20 rounded-lg flex items-center justify-center border-2 border-magenta-500/50 shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-all duration-300 hover:scale-110 animate-icon-pulse">
                    <MapPin className="w-6 h-6 text-magenta-400 drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">Physical Location</p>
                    <p className="text-white font-mono">Night City // Remote Access</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Neural Links */}
            <div className="backdrop-blur-sm bg-black/40 p-6 rounded-lg border-2 border-magenta-400/50 shadow-[0_0_30px_rgba(255,0,255,0.3)] animate-contact-boot transition-all duration-500 hover:bg-black/60 hover:border-cyan-400/50 hover:scale-105 relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
              {/* Neural grid overlay */}
              <div className="absolute inset-0 opacity-10 animate-neural-grid" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,0,255,0.1) 10px, rgba(255,0,255,0.1) 20px)',
              }}></div>
              
              <h3 className="text-2xl font-mono font-semibold mb-6 text-magenta-400 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] relative z-10">NEURAL NETWORKS</h3>
              <div className="flex space-x-4 relative z-10">
                <button 
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-all duration-500 group border-2 border-blue-500/50 hover:scale-110 shadow-[0_0_20px_rgba(0,100,255,0.3)] hover:shadow-[0_0_30px_rgba(0,100,255,0.5)] transform hover:-translate-y-1 animate-social-pulse"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,100,255,0.8)]" />
                </button>
                <button 
                  onClick={() => handleSocialClick('GitHub')}
                  className="w-14 h-14 bg-gray-500/20 rounded-lg flex items-center justify-center hover:bg-gray-500/30 transition-all duration-500 group border-2 border-gray-500/50 hover:scale-110 shadow-[0_0_20px_rgba(107,114,128,0.3)] hover:shadow-[0_0_30px_rgba(107,114,128,0.5)] transform hover:-translate-y-1 animate-social-pulse" style={{ animationDelay: '0.1s' }}
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(107,114,128,0.8)]" />
                </button>
                <button 
                  onClick={() => handleSocialClick('Twitter')}
                  className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition-all duration-500 group border-2 border-cyan-500/50 hover:scale-110 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transform hover:-translate-y-1 animate-social-pulse" style={{ animationDelay: '0.2s' }}
                >
                  <Twitter className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Neural Contact Form */}
          <Card className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400/50 shadow-2xl hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(255,255,0,0.3)] transition-all duration-500 animate-form-boot hover:scale-105 relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
            {/* Form neural overlay */}
            <div className="absolute inset-0 opacity-5 animate-neural-corruption" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFF00' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-white text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] font-mono uppercase tracking-wider">NEURAL TRANSMISSION</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First.Name" 
                    className="bg-black/60 backdrop-blur-sm border-2 border-cyan-400/50 text-white placeholder:text-gray-500 hover:border-cyan-400/70 focus:border-cyan-400/90 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] font-mono" 
                  />
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last.Name" 
                    className="bg-black/60 backdrop-blur-sm border-2 border-cyan-400/50 text-white placeholder:text-gray-500 hover:border-cyan-400/70 focus:border-cyan-400/90 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] font-mono" 
                  />
                </div>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="neural.address@net" 
                  className="bg-black/60 backdrop-blur-sm border-2 border-cyan-400/50 text-white placeholder:text-gray-500 hover:border-cyan-400/70 focus:border-cyan-400/90 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] font-mono mb-4" 
                />
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="transmission.subject" 
                  className="bg-black/60 backdrop-blur-sm border-2 border-cyan-400/50 text-white placeholder:text-gray-500 hover:border-cyan-400/70 focus:border-cyan-400/90 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] font-mono mb-4" 
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter neural message data..." 
                  className="bg-black/60 backdrop-blur-sm border-2 border-cyan-400/50 text-white placeholder:text-gray-500 min-h-[120px] hover:border-cyan-400/70 focus:border-cyan-400/90 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] font-mono mb-4" 
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-magenta-600 hover:from-cyan-700 hover:to-magenta-700 text-white font-mono font-semibold py-4 rounded-lg transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(0,255,255,0.4)] border-2 border-cyan-400/50 backdrop-blur-sm hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transform hover:-translate-y-1 uppercase tracking-wider animate-button-pulse"
                >
                  >> TRANSMIT NEURAL DATA
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
