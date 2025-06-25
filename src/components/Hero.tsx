import { Shield, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Animated glowing rings */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-cyan-400/30 rounded-full animate-pulse shadow-[0_0_50px_rgba(6,182,212,0.3)]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-blue-400/30 rounded-full animate-pulse delay-1000 shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-teal-400/20 rounded-full animate-pulse delay-2000 shadow-[0_0_80px_rgba(20,184,166,0.2)]"></div>
      </div>
      
      {/* Slow moving particles */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating particles with very slow movement */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-[float-slow_25s_ease-in-out_infinite] shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-[float-slow_30s_ease-in-out_infinite_reverse] shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
        <div className="absolute top-64 left-1/4 w-1 h-1 bg-teal-400 rounded-full animate-[float-slow_35s_ease-in-out_infinite] shadow-[0_0_12px_rgba(20,184,166,0.8)]"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-green-400/60 rounded-full animate-[drift-slow_40s_linear_infinite] shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>
        <div className="absolute top-1/2 left-16 w-1 h-1 bg-cyan-300 rounded-full animate-[drift-slow_28s_linear_infinite_reverse] shadow-[0_0_8px_rgba(103,232,249,0.8)]"></div>
        <div className="absolute bottom-64 right-16 w-1.5 h-1.5 bg-blue-300 rounded-full animate-[float-slow_32s_ease-in-out_infinite] shadow-[0_0_18px_rgba(147,197,253,0.8)]"></div>
        <div className="absolute top-20 left-2/3 w-1 h-1 bg-teal-300 rounded-full animate-[drift-slow_45s_linear_infinite] shadow-[0_0_10px_rgba(94,234,212,0.8)]"></div>
        <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-cyan-400/80 rounded-full animate-[float-slow_38s_ease-in-out_infinite_reverse] shadow-[0_0_12px_rgba(6,182,212,0.6)]"></div>
        <div className="absolute top-80 right-1/4 w-1.5 h-1.5 bg-blue-400/70 rounded-full animate-[drift-slow_33s_linear_infinite_reverse] shadow-[0_0_16px_rgba(59,130,246,0.5)]"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-green-300 rounded-full animate-[float-slow_42s_ease-in-out_infinite] shadow-[0_0_14px_rgba(134,239,172,0.8)]"></div>
      </div>
      
      {/* Existing animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000 shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500 shadow-[0_0_18px_rgba(59,130,246,0.8)]"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-700 shadow-[0_0_25px_rgba(20,184,166,0.8)]"></div>
        {/* Additional dark theme elements */}
        <div className="absolute top-1/2 left-10 w-px h-20 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
        <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex justify-center space-x-4">
          <div className="p-4 rounded-full bg-black/30 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <Shield className="w-12 h-12 text-cyan-400 animate-pulse drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </div>
          <div className="p-4 rounded-full bg-black/30 backdrop-blur-sm border border-green-400/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <Terminal className="w-12 h-12 text-green-400 animate-pulse delay-300 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          </div>
          <div className="p-4 rounded-full bg-black/30 backdrop-blur-sm border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <Lock className="w-12 h-12 text-blue-400 animate-pulse delay-600 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-fade-in drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
          Cybersecurity Expert
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in delay-300 backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-gray-700/30">
          Protecting digital assets through advanced threat detection, incident response, and security architecture
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-cyan-400/30 backdrop-blur-sm">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
