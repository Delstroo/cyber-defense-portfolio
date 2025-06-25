import { Shield, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Slow moving particles */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating particles with very slow movement */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-[float-slow_25s_ease-in-out_infinite]"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-[float-slow_30s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-64 left-1/4 w-1 h-1 bg-teal-400 rounded-full animate-[float-slow_35s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-green-400/60 rounded-full animate-[drift-slow_40s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-[drift-slow_28s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-64 right-16 w-1.5 h-1.5 bg-blue-300 rounded-full animate-[float-slow_32s_ease-in-out_infinite]"></div>
        <div className="absolute top-20 left-2/3 w-1 h-1 bg-teal-300 rounded-full animate-[drift-slow_45s_linear_infinite]"></div>
        <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-cyan-400/80 rounded-full animate-[float-slow_38s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-80 right-1/4 w-1.5 h-1.5 bg-blue-400/70 rounded-full animate-[drift-slow_33s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-green-300 rounded-full animate-[float-slow_42s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Existing animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-700"></div>
        {/* Additional dark theme elements */}
        <div className="absolute top-1/2 left-10 w-px h-20 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
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
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in delay-300">
          Protecting digital assets through advanced threat detection, incident response, and security architecture
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
