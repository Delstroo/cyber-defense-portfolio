
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">security@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">Available Remote & On-site</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-colors duration-300 group border border-blue-500/30">
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center hover:bg-gray-500/30 transition-colors duration-300 group border border-gray-500/30">
                  <Github className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center hover:bg-sky-500/30 transition-colors duration-300 group border border-sky-500/30">
                  <Twitter className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-gray-900/80 border-gray-700 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-500" />
                <Input placeholder="Last Name" className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-500" />
              </div>
              <Input placeholder="Email Address" className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-500" />
              <Input placeholder="Subject" className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-500" />
              <Textarea 
                placeholder="Your message..." 
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 min-h-[120px]" 
              />
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25">
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
