
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to secure your organization? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white">security@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Available Remote & On-site</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-colors duration-300 group">
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:bg-gray-500/30 transition-colors duration-300 group">
                  <Github className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center hover:bg-sky-500/30 transition-colors duration-300 group">
                  <Twitter className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-slate-700/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400" />
                <Input placeholder="Last Name" className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400" />
              </div>
              <Input placeholder="Email Address" className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400" />
              <Input placeholder="Subject" className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400" />
              <Textarea 
                placeholder="Your message..." 
                className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 min-h-[120px]" 
              />
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105">
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
