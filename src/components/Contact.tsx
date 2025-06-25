
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
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSocialClick = (platform: string) => {
    alert(`${platform} profile would be linked here. Contact for actual links.`);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Enhanced futuristic background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-[aurora_20s_ease-in-out_infinite]" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      {/* Enhanced animated tech elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400/30 rounded-lg rotate-45 animate-[float-rotate_30s_ease-in-out_infinite] shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-pink-400/30 rounded-full animate-[float-slow_35s_ease-in-out_infinite] shadow-[0_0_25px_rgba(236,72,153,0.3)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-400/20 rounded-full animate-[pulse_8s_ease-in-out_infinite] shadow-[0_0_50px_rgba(6,182,212,0.2)]"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-green-400/25 rotate-12 animate-[float-rotate_40s_ease-in-out_infinite_reverse] shadow-[0_0_20px_rgba(34,197,94,0.25)]"></div>
        <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border border-blue-400/30 rounded-full animate-[orbit_45s_linear_infinite] shadow-[0_0_18px_rgba(59,130,246,0.3)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-[fade-slide-up_1s_ease-out]">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-gray-700/30 animate-[fade-slide-up_1s_ease-out_0.3s_both] transition-all duration-500 hover:bg-black/30 hover:border-gray-600/40">
            Ready to secure your organization? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-gray-700/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-[fade-slide-up_1s_ease-out_0.5s_both] transition-all duration-500 hover:bg-black/30 hover:border-gray-600/40 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:scale-105 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-110">
                    <Mail className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">security@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-green-400/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:scale-105 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-110">
                    <Phone className="w-6 h-6 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-purple-400/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:scale-105 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-110">
                    <MapPin className="w-6 h-6 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">Available Remote & On-site</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-gray-700/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-[fade-slide-up_1s_ease-out_0.7s_both] transition-all duration-500 hover:bg-black/30 hover:border-gray-600/40 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Connect With Me</h3>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-all duration-500 group border border-blue-500/30 hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </button>
                <button 
                  onClick={() => handleSocialClick('GitHub')}
                  className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:bg-gray-500/30 transition-all duration-500 group border border-gray-500/30 hover:scale-110 shadow-[0_0_20px_rgba(107,114,128,0.3)] hover:shadow-[0_0_30px_rgba(107,114,128,0.5)] transform hover:-translate-y-1"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(107,114,128,0.8)]" />
                </button>
                <button 
                  onClick={() => handleSocialClick('Twitter')}
                  className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center hover:bg-sky-500/30 transition-all duration-500 group border border-sky-500/30 hover:scale-110 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transform hover:-translate-y-1"
                >
                  <Twitter className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-black/40 backdrop-blur-sm border-gray-700/50 shadow-2xl border-2 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-500 animate-[fade-slide-up_1s_ease-out_0.9s_both] hover:scale-105">
            <CardHeader>
              <CardTitle className="text-white text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name" 
                    className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]" 
                  />
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name" 
                    className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]" 
                  />
                </div>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] mb-4" 
                />
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] mb-4" 
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..." 
                  className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 min-h-[120px] hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] mb-4" 
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-cyan-400/30 backdrop-blur-sm hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transform hover:-translate-y-1"
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
