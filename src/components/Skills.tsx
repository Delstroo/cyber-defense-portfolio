
import { Shield, Lock, Terminal, Eye, AlertTriangle, Database, Network, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Threat Detection",
      icon: Eye,
      skills: [
        "SIEM Implementation (Splunk)",
        "Log Analysis",
        "Network Traffic Analysis (Wireshark)",
        "Anomaly Detection"
      ],
      color: "text-red-400",
      glowColor: "rgba(255, 0, 0, 0.4)",
      borderColor: "border-red-400/50"
    },
    {
      title: "Security Architecture",
      icon: Shield,
      skills: [
        "Secure Coding Practices",
        "Vulnerability Management",
        "System Hardening",
        "Firewall & Access-List Configuration"
      ],
      color: "text-cyan-400",
      glowColor: "rgba(0, 255, 255, 0.4)",
      borderColor: "border-cyan-400/50"
    },
    {
      title: "Incident Response",
      icon: AlertTriangle,
      skills: [
        "Incident Resolution",
        "Root Cause Analysis",
        "Digital Forensics Principles",
        "Security Incident Reporting"
      ],
      color: "text-yellow-400",
      glowColor: "rgba(255, 255, 0, 0.4)",
      borderColor: "border-yellow-400/50"
    },
    {
      title: "Network Infrastructure",
      icon: Terminal,
      skills: [
        "TCP/IP & OSI Model",
        "Cisco Networking Concepts",
        "LAN/WAN/Wireless",
        "VPNs (IPsec Tunnels)"
      ],
      color: "text-green-400",
      glowColor: "rgba(0, 255, 0, 0.4)",
      borderColor: "border-green-400/50"
    },
    {
      title: "Compliance",
      icon: Lock,
      skills: [
        "OWASP Top 10",
        "MITRE ATT&CK Framework",
        "Security Best Practices Adherence",
        "Process Documentation"
      ],
      color: "text-blue-400",
      glowColor: "rgba(0, 100, 255, 0.4)",
      borderColor: "border-blue-400/50"
    },
    {
      title: "Development",
      icon: Code,
      skills: [
        "Python Scripting",
        "Swift",
        "Git Version Control",
        "Web Development (HTML/CSS/JavaScript)"
      ],
      color: "text-purple-400",
      glowColor: "rgba(128, 0, 255, 0.4)",
      borderColor: "border-purple-400/50"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Ambient technical background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-tech-pattern" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 0.05) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      {/* Subtle ambient elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-ambient-sweep"></div>
        <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/15 to-transparent animate-ambient-sweep-reverse"></div>
        <div className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-ambient-sweep-vertical"></div>
        
        {/* Floating technical nodes */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border border-cyan-400/20 rotate-45 animate-ambient-rotate"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 border border-purple-400/20 rounded-full animate-ambient-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-16 bg-gradient-to-b from-cyan-400/20 to-transparent animate-data-flow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text   drop-shadow-lg animate-subtle-glitch">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-black/40 p-4 rounded-lg border border-cyan-400/20 animate-fade-up transition-all duration-700 hover:bg-black/60 hover:border-purple-400/30">
            Comprehensive cybersecurity expertise across multiple domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`bg-black/70 backdrop-blur-sm ${category.borderColor} border hover:bg-black/80 transition-all duration-700 hover:scale-105 group shadow-xl hover:shadow-[0_0_30px_${category.glowColor}] animate-card-drift transform hover:-translate-y-2 relative overflow-hidden`} style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}>
              
              <CardHeader className="text-center relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-black/60 backdrop-blur-sm border ${category.borderColor} flex items-center justify-center transition-all duration-700 group-hover:scale-110 animate-icon-breathe`} 
                     style={{ 
                       boxShadow: `0 0 20px ${category.glowColor}`
                     }}>
                  <category.icon className={`w-8 h-8 ${category.color} transition-all duration-700 group-hover:scale-110`} />
                </div>
                <CardTitle className="text-white text-xl transition-all duration-500 group-hover:text-cyan-400 font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/40 transition-all duration-700 hover:bg-black/60 hover:scale-105 animate-skill-appear" style={{ animationDelay: `${(index * 0.15) + (skillIndex * 0.08)}s` }}>
                      <div className={`w-2 h-2 rounded-full animate-skill-pulse`} 
                           style={{ 
                             backgroundColor: category.color.replace('text-', '').replace('-400', ''),
                             animationDelay: `${skillIndex * 0.3}s`
                           }}></div>
                      <span className="text-gray-300 transition-colors duration-500 hover:text-white text-sm">{skill}</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-700/50 to-transparent"></div>
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
