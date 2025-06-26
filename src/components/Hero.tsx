
import { Shield, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Cyberpunk Resume - Neural Interface Required');
    link.download = 'neural_resume.txt';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Cyberpunk grid overlay with scanlines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px',
          animation: 'cyberpunk-grid 15s linear infinite'
        }}></div>
      </div>
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-full w-full animate-scanlines" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
          animation: 'scanlines 2s linear infinite'
        }}></div>
      </div>
      
      {/* Glitch overlay effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-2 h-20 bg-gradient-to-b from-magenta-500 to-transparent animate-glitch-1 shadow-[0_0_20px_rgba(255,0,255,0.8)]"></div>
        <div className="absolute top-40 right-20 w-3 h-15 bg-gradient-to-b from-cyan-400 to-transparent animate-glitch-2 shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-25 bg-gradient-to-b from-yellow-400 to-transparent animate-glitch-3 shadow-[0_0_10px_rgba(255,255,0,0.8)]"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-30 bg-gradient-to-b from-green-400 to-transparent animate-glitch-4 shadow-[0_0_12px_rgba(0,255,0,0.8)]"></div>
        
        {/* Floating digital debris */}
        <div className="absolute top-1/4 left-1/5 w-4 h-4 border border-magenta-400/60 animate-digital-float shadow-[0_0_15px_rgba(255,0,255,0.4)]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 border border-cyan-400/60 rotate-45 animate-digital-drift shadow-[0_0_12px_rgba(0,255,255,0.4)]"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-8 bg-yellow-400/30 animate-data-stream shadow-[0_0_8px_rgba(255,255,0,0.4)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Cyberpunk Portfolio Photo */}
        <div className="mb-12 flex justify-center animate-neural-boot">
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-magenta-500/20 via-cyan-400/20 to-yellow-400/20 rounded-full blur-xl animate-neural-pulse group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative p-3 rounded-full bg-black/80 backdrop-blur-sm border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(0,255,255,0.5)] hover:shadow-[0_0_80px_rgba(255,0,255,0.6)] transition-all duration-500 hover:scale-105 animate-subtle-glitch">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-gradient-to-r from-magenta-400/50 to-cyan-400/50">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                  alt="Neural Interface Profile"
                  className="object-cover transition-all duration-500 group-hover:scale-110 filter contrast-125 saturate-125"
                />
                <AvatarFallback className="bg-gradient-to-br from-magenta-400/20 to-cyan-400/20 text-cyan-400 text-2xl font-mono font-bold border-2 border-cyan-400/30">
                  <span className="animate-text-glitch">NX</span>
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full animate-neural-status shadow-[0_0_15px_rgba(0,255,0,0.8)] border-2 border-black">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
            </div>
            {/* Neural connection lines */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 animate-connect-1"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-magenta-400/50 animate-connect-2"></div>
          </div>
        </div>

        <div className="mb-8 flex justify-center space-x-6">
          <div className="p-4 rounded-lg bg-black/60 backdrop-blur-sm border border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:scale-110 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] animate-icon-float-1">
            <Shield className="w-12 h-12 text-cyan-400 animate-neural-pulse drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
            <div className="text-xs text-cyan-400 mt-2 font-mono">SHIELD.EXE</div>
          </div>
          <div className="p-4 rounded-lg bg-black/60 backdrop-blur-sm border border-magenta-400/50 shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:scale-110 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] animate-icon-float-2">
            <Terminal className="w-12 h-12 text-magenta-400 animate-neural-pulse drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]" />
            <div className="text-xs text-magenta-400 mt-2 font-mono">TERM.RUN</div>
          </div>
          <div className="p-4 rounded-lg bg-black/60 backdrop-blur-sm border border-yellow-400/50 shadow-[0_0_30px_rgba(255,255,0,0.4)] hover:scale-110 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,0,0.6)] animate-icon-float-3">
            <Lock className="w-12 h-12 text-yellow-400 animate-neural-pulse drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]" />
            <div className="text-xs text-yellow-400 mt-2 font-mono">LOCK.SYS</div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 bg-clip-text text-transparent animate-title-glitch drop-shadow-[0_0_30px_rgba(0,255,255,0.5)] relative">
          <span className="relative">
            NEURAL HACKER
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 bg-clip-text text-transparent animate-text-corruption opacity-30"></div>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-text-fade backdrop-blur-sm bg-black/40 p-6 rounded-lg border border-cyan-400/30 font-mono relative transition-all duration-500 hover:bg-black/60 hover:border-magenta-400/40">
          <span className="relative z-10">
            INFILTRATING SYSTEMS // SECURING NETWORKS // NEURAL INTERFACE SPECIALIST
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-magenta-400/5 animate-data-flow"></div>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-button-boot">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-600 to-magenta-600 hover:from-cyan-700 hover:to-magenta-700 text-white px-8 py-4 rounded-lg transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(0,255,255,0.4)] border border-cyan-400/50 backdrop-blur-sm hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transform hover:-translate-y-1 font-mono uppercase tracking-wider animate-button-pulse"
          >
            >> ACCESS PROJECTS
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleDownloadResume}
            className="border-2 border-yellow-400/60 text-yellow-400 hover:bg-yellow-400/20 hover:text-yellow-300 px-8 py-4 rounded-lg transition-all duration-500 hover:scale-105 bg-black/40 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,0,0.5)] transform hover:-translate-y-1 font-mono uppercase tracking-wider animate-button-pulse-alt"
          >
            >> DOWNLOAD.EXE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
