
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Futuristic background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      {/* Animated tech elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400/30 rounded-lg rotate-45 animate-pulse shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-pink-400/30 rounded-full animate-pulse delay-1000 shadow-[0_0_25px_rgba(236,72,153,0.3)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-400/20 rounded-full animate-pulse delay-2000 shadow-[0_0_50px_rgba(6,182,212,0.2)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-gray-700/30">
            Ready to secure your organization? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-gray-700/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <Mail className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">security@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-green-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <Phone className="w-6 h-6 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-purple-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
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
            <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-gray-700/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 group border border-blue-500/30 hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:bg-gray-500/30 transition-all duration-300 group border border-gray-500/30 hover:scale-110 shadow-[0_0_20px_rgba(107,114,128,0.3)]">
                  <Github className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(107,114,128,0.8)]" />
                </a>
                <a href="#" className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center hover:bg-sky-500/30 transition-all duration-300 group border border-sky-500/30 hover:scale-110 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  <Twitter className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-black/40 backdrop-blur-sm border-gray-700/50 shadow-2xl border-2 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-white text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
                <Input placeholder="Last Name" className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
              </div>
              <Input placeholder="Email Address" className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
              <Input placeholder="Subject" className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
              <Textarea 
                placeholder="Your message..." 
                className="bg-black/40 backdrop-blur-sm border-gray-600/50 text-white placeholder:text-gray-500 min-h-[120px] hover:border-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" 
              />
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-cyan-400/30 backdrop-blur-sm">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
