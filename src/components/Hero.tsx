
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
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Professional Resume - Contact for full version');
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-blue-950 text-white relative overflow-hidden">
      {/* Subtle cyberpunk grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'cyberpunk-grid 20s linear infinite'
        }}></div>
      </div>
      
      {/* Subtle glitch effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent animate-glitch-1"></div>
        <div className="absolute bottom-32 right-20 w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent animate-glitch-2"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400/60 animate-digital-float"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Professional Portfolio Photo with cyberpunk touches */}
        <div className="mb-12 flex justify-center animate-neural-boot">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-400/20 to-purple-500/20 rounded-full blur-lg animate-neural-pulse group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative p-2 rounded-full bg-black/60 backdrop-blur-sm border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,100,255,0.4)] transition-all duration-500 hover:scale-105">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-cyan-400/20">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                  alt="Professional Profile"
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <AvatarFallback className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 text-cyan-400 text-2xl font-bold">
                  JS
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,0,0.6)]"></div>
          </div>
        </div>

        {/* Tech icons with subtle cyberpunk styling */}
        <div className="mb-8 flex justify-center space-x-6">
          <div className="p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-cyan-400/30 shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-cyan-400/20 animate-icon-float-1">
            <Shield className="w-10 h-10 text-cyan-400" />
            <div className="text-xs text-cyan-400 mt-1 font-mono">Security</div>
          </div>
          <div className="p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-blue-400/30 shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-blue-400/20 animate-icon-float-2">
            <Terminal className="w-10 h-10 text-blue-400" />
            <div className="text-xs text-blue-400 mt-1 font-mono">Terminal</div>
          </div>
          <div className="p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-purple-400/30 shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-purple-400/20 animate-icon-float-3">
            <Lock className="w-10 h-10 text-purple-400" />
            <div className="text-xs text-purple-400 mt-1 font-mono">Encryption</div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-title-glitch drop-shadow-2xl">
          <span className="relative font-sans">
            Full Stack Developer
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-corruption opacity-20"></div>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-text-fade backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-cyan-400/20 transition-all duration-500 hover:bg-black/30 hover:border-blue-400/30">
          <span className="relative z-10">
            Building secure, scalable applications with modern technologies and cybersecurity best practices
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-button-boot">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/25 border border-cyan-400/30 backdrop-blur-sm transform hover:-translate-y-1"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleDownloadResume}
            className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:text-purple-300 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 bg-black/20 backdrop-blur-sm shadow-lg hover:shadow-purple-400/25 transform hover:-translate-y-1"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
