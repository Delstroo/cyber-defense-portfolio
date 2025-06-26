
import { Shield, Lock, Terminal, Eye, AlertTriangle, Database, Network, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Neural Threat Detection",
      icon: Eye,
      skills: ["AI-Enhanced SIEM", "Malware Dissection", "Digital Necromancy", "Neural Intelligence"],
      color: "text-red-400",
      glowColor: "rgba(255, 0, 0, 0.4)",
      borderColor: "border-red-400/50"
    },
    {
      title: "Cyber Architecture",
      icon: Shield,
      skills: ["Zero-Trust Protocols", "Network Fortress", "Cloud Sovereignty", "Risk Algorithms"],
      color: "text-cyan-400",
      glowColor: "rgba(0, 255, 255, 0.4)",
      borderColor: "border-cyan-400/50"
    },
    {
      title: "Crisis Response Unit",
      icon: AlertTriangle,
      skills: ["Neural Crisis Control", "Breach Autopsy", "System Resurrection", "Corporate Liaison"],
      color: "text-yellow-400",
      glowColor: "rgba(255, 255, 0, 0.4)",
      borderColor: "border-yellow-400/50"
    },
    {
      title: "Penetration Warfare",
      icon: Terminal,
      skills: ["Vulnerability Mining", "Web App Dissection", "Network Infiltration", "Social Engineering"],
      color: "text-green-400",
      glowColor: "rgba(0, 255, 0, 0.4)",
      borderColor: "border-green-400/50"
    },
    {
      title: "Corporate Compliance",
      icon: Lock,
      skills: ["GDPR Protocol", "SOX Interface", "HIPAA Encryption", "ISO 27001", "Risk Matrices"],
      color: "text-blue-400",
      glowColor: "rgba(0, 100, 255, 0.4)",
      borderColor: "border-blue-400/50"
    },
    {
      title: "Neural Coding",
      icon: Code,
      skills: ["Python Scripts", "PowerShell Core", "Linux Terminal", "Wireshark Deep", "Metasploit Pro", "Burp Suite Elite"],
      color: "text-purple-400",
      glowColor: "rgba(128, 0, 255, 0.4)",
      borderColor: "border-purple-400/50"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Cyberpunk background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-neural-grid" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      {/* Digital circuit lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-data-stream-horizontal"></div>
        <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-magenta-400/60 to-transparent animate-data-stream-horizontal-reverse"></div>
        <div className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent animate-data-stream-vertical"></div>
        <div className="absolute right-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/60 to-transparent animate-data-stream-vertical-reverse"></div>
        
        {/* Floating neural nodes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-cyan-400/40 rotate-45 animate-neural-rotate shadow-[0_0_20px_rgba(0,255,255,0.4)]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 border-2 border-magenta-400/40 rounded-full animate-neural-pulse shadow-[0_0_15px_rgba(255,0,255,0.4)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,255,0.5)] animate-title-glitch relative">
            <span className="relative">
              NEURAL PROTOCOLS
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent animate-text-corruption opacity-20"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-black/40 p-4 rounded-lg border border-cyan-400/30 animate-text-fade font-mono transition-all duration-500 hover:bg-black/60 hover:border-magenta-400/40">
            ENHANCED CYBERSECURITY PROTOCOLS ACROSS MULTIPLE NEURAL NETWORKS
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`bg-black/80 backdrop-blur-sm ${category.borderColor} border-2 hover:bg-black/90 transition-all duration-500 hover:scale-105 group shadow-2xl hover:shadow-[0_0_40px_${category.glowColor}] animate-card-boot transform hover:-translate-y-2 relative overflow-hidden`} style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}>
              {/* Card glitch overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-magenta-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-subtle-glitch"></div>
              
              <CardHeader className="text-center relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-black/60 backdrop-blur-sm border-2 ${category.borderColor} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-icon-pulse`} 
                     style={{ 
                       boxShadow: `0 0 30px ${category.glowColor}`
                     }}>
                  <category.icon className={`w-8 h-8 ${category.color} transition-all duration-500 group-hover:scale-110`} 
                                 style={{ filter: `drop-shadow(0 0 10px ${category.glowColor})` }} />
                </div>
                <CardTitle className="text-white text-xl transition-all duration-300 group-hover:text-cyan-400 font-mono uppercase tracking-wider">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-black/60 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:bg-black/80 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] animate-skill-load" style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}>
                      <div className={`w-3 h-3 rounded-full animate-neural-pulse`} 
                           style={{ 
                             backgroundColor: category.color.replace('text-', '').replace('-400', ''),
                             boxShadow: `0 0 8px ${category.glowColor}`,
                             animationDelay: `${skillIndex * 0.2}s`
                           }}></div>
                      <span className="text-gray-300 transition-colors duration-300 hover:text-white font-mono text-sm">{skill}</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
