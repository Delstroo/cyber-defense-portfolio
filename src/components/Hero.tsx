
import { Shield, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex justify-center space-x-4">
          <Shield className="w-12 h-12 text-cyan-400 animate-pulse" />
          <Terminal className="w-12 h-12 text-green-400 animate-pulse delay-300" />
          <Lock className="w-12 h-12 text-blue-400 animate-pulse delay-600" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
          Cybersecurity Expert
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-300">
          Protecting digital assets through advanced threat detection, incident response, and security architecture
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
