
import { Shield, Lock, Terminal, Eye, AlertTriangle, Database, Network, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Threat Detection & Analysis",
      icon: Eye,
      skills: ["SIEM Management", "Malware Analysis", "Digital Forensics", "Threat Intelligence"],
      color: "text-red-400",
      glowColor: "rgba(248, 113, 113, 0.3)"
    },
    {
      title: "Security Architecture",
      icon: Shield,
      skills: ["Zero Trust Implementation", "Network Security", "Cloud Security", "Risk Assessment"],
      color: "text-cyan-400",
      glowColor: "rgba(6, 182, 212, 0.3)"
    },
    {
      title: "Incident Response",
      icon: AlertTriangle,
      skills: ["Crisis Management", "Breach Investigation", "Recovery Planning", "Communication"],
      color: "text-yellow-400",
      glowColor: "rgba(250, 204, 21, 0.3)"
    },
    {
      title: "Penetration Testing",
      icon: Terminal,
      skills: ["Vulnerability Assessment", "Web App Testing", "Network Penetration", "Social Engineering"],
      color: "text-green-400",
      glowColor: "rgba(34, 197, 94, 0.3)"
    },
    {
      title: "Compliance & Governance",
      icon: Lock,
      skills: ["GDPR", "SOX", "HIPAA", "ISO 27001", "Risk Management"],
      color: "text-blue-400",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      title: "Technical Skills",
      icon: Code,
      skills: ["Python", "PowerShell", "Linux", "Wireshark", "Metasploit", "Burp Suite"],
      color: "text-purple-400",
      glowColor: "rgba(168, 85, 247, 0.3)"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Enhanced futuristic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full animate-[gradient-shift_15s_ease-in-out_infinite]" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      {/* Enhanced animated circuit lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-[circuit-flow_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-[circuit-flow_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-teal-400/40 to-transparent animate-[circuit-flow-vertical_12s_ease-in-out_infinite]"></div>
        <div className="absolute right-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/40 to-transparent animate-[circuit-flow-vertical_14s_ease-in-out_infinite_reverse]"></div>
        
        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border border-cyan-400/30 rotate-45 animate-[float-rotate_20s_ease-in-out_infinite] shadow-[0_0_20px_rgba(6,182,212,0.3)]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 border border-purple-400/30 rounded-full animate-[float-slow_25s_ease-in-out_infinite] shadow-[0_0_15px_rgba(168,85,247,0.3)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-[fade-slide-up_1s_ease-out]">
            Core Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-gray-700/30 animate-[fade-slide-up_1s_ease-out_0.3s_both] transition-all duration-500 hover:bg-black/30 hover:border-gray-600/40">
            Comprehensive cybersecurity skills across multiple domains and technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-black/60 backdrop-blur-sm border-gray-700/50 hover:bg-black/80 transition-all duration-500 hover:scale-105 group shadow-2xl hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] border-2 hover:border-cyan-400/30 animate-[fade-slide-up_1s_ease-out] transform hover:-translate-y-2" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-black/40 backdrop-blur-sm border flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`} 
                     style={{ 
                       borderColor: category.color.replace('text-', 'rgb(') + ', 0.3)',
                       boxShadow: `0 0 30px ${category.glowColor}`
                     }}>
                  <category.icon className={`w-8 h-8 ${category.color} transition-all duration-500 group-hover:scale-110`} 
                                 style={{ filter: `drop-shadow(0 0 10px ${category.glowColor})` }} />
                </div>
                <CardTitle className="text-white text-xl transition-all duration-300 group-hover:text-cyan-400">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3 p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 hover:bg-black/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                      <div className={`w-2 h-2 rounded-full animate-pulse`} 
                           style={{ 
                             backgroundColor: category.color.replace('text-', '').replace('-400', ''),
                             boxShadow: `0 0 8px ${category.glowColor}`,
                             animationDelay: `${skillIndex * 0.2}s`
                           }}></div>
                      <span className="text-gray-300 transition-colors duration-300 hover:text-white">{skill}</span>
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
