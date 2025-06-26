
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Zap, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
        title: "SIEM Implementation Lab",
        description: "Virtual security lab using Kali and Windows/Linux VMs with Splunk SIEM. Developed detection rules, dashboards, and validated alerts via simulated attacks like Nmap scans and login failures.",
        technologies: ["Splunk", "VirtualBox", "Kali Linux", "Windows 10", "Syslog"],
        icon: Shield,
        category: "Threat Detection",
        glowColor: "rgba(255, 100, 0, 0.4)",
        borderColor: "border-orange-400/50",
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Vulnerability Assessment",
        description: "Performed vulnerability scans with Nessus against Metasploitable VMs. Created remediation reports outlining critical flaws, SQLi/XSS risks, and mitigation strategies.",
        technologies: ["Nessus", "Metasploitable", "OpenVAS", "Vulnerability Scoring", "Reporting"],
        icon: Lock,
        category: "Offensive Security",
        glowColor: "rgba(255, 0, 100, 0.4)",
        borderColor: "border-pink-400/50",
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Network Traffic Analysis",
        description: "Captured and dissected traffic with Wireshark to identify anomalies, clear-text credentials, and indicators of compromise. Proposed network segmentation and IDS rules.",
        technologies: ["Wireshark", "TCP/IP", "DNS", "HTTP", "Packet Analysis"],
        icon: Zap,
        category: "Blue Teaming",
        glowColor: "rgba(0, 150, 255, 0.4)",
        borderColor: "border-sky-400/50",
        demoUrl: "#",
        githubUrl: "#"
      }
  ];

  const handleProjectAction = (url: string, action: string) => {
    if (url === "#") {
      alert(`${action} protocol initiated. Neural interface required for full access.`);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-950 via-black to-purple-950 text-white relative overflow-hidden">
      {/* Cyberpunk hexagonal matrix */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-matrix-flow" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FFFF' fill-opacity='0.1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20-20v40l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Neural energy beams */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-energy-beam shadow-[0_0_20px_rgba(0,255,255,0.8)]"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-magenta-400/80 to-transparent animate-energy-beam-reverse shadow-[0_0_20px_rgba(255,0,255,0.8)]"></div>
        <div className="absolute left-1/3 top-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent animate-energy-beam-vertical shadow-[0_0_15px_rgba(255,255,0,0.6)]"></div>
        
        {/* Floating neural constructs */}
        <div className="absolute top-20 right-20 w-12 h-12 border-2 border-cyan-400/40 rotate-45 animate-neural-construct shadow-[0_0_25px_rgba(0,255,255,0.4)]"></div>
        <div className="absolute bottom-32 left-16 w-8 h-8 border-2 border-magenta-400/40 rounded-full animate-neural-orbit shadow-[0_0_20px_rgba(255,0,255,0.4)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text drop-shadow-[0_0_30px_rgba(0,255,0,0.5)] animate-title-glitch relative">
            <span className="relative">
              PROJECTS
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text   animate-text-corruption opacity-20"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto backdrop-blur-sm bg-black/40 p-4 rounded-lg border border-cyan-400/30 animate-text-fade font-mono transition-all duration-500 hover:bg-black/60 hover:border-magenta-400/40">
            REAL-WORLD CYBERSECURITY SOLUTIONS WITH MEASURABLE NEURAL IMPACT
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-black/60 backdrop-blur-sm ${project.borderColor} border-2 hover:bg-black/80 transition-all duration-500 hover:scale-105 group shadow-2xl hover:shadow-[0_0_50px_${project.glowColor}] relative overflow-hidden animate-project-boot transform hover:-translate-y-2`} style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
              {/* Neural corruption overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-magenta-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-neural-corruption"></div>
              
              {/* Glitch lines */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-glitch-line"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-magenta-400/60 to-transparent animate-glitch-line-reverse"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-black/60 backdrop-blur-sm border-2 ${project.borderColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-icon-glitch`}
                       style={{ 
                         boxShadow: `0 0 30px ${project.glowColor}`
                       }}>
                    <project.icon className="w-8 h-8 text-cyan-400 transition-all duration-500 group-hover:scale-110" 
                                  style={{ filter: `drop-shadow(0 0 10px ${project.glowColor})` }} />
                  </div>
                  <Badge variant="secondary" className="bg-black/60 backdrop-blur-sm text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 hover:bg-cyan-400/20 hover:scale-105 font-mono uppercase tracking-wider">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors duration-300 font-mono">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-400 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-300 font-mono text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-gray-700/50 bg-black/40 backdrop-blur-sm text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:scale-105 font-mono text-xs animate-tech-badge" style={{ animationDelay: `${techIndex * 0.1}s` }}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => handleProjectAction(project.demoUrl, 'Neural Interface')}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105 transform hover:-translate-y-1 font-mono uppercase tracking-wider animate-button-pulse"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Access</span>
                  </Button>
                  <Button 
                    onClick={() => handleProjectAction(project.githubUrl, 'Code Repository')}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-all duration-300 p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-600/10 hover:shadow-[0_0_20px_rgba(107,114,128,0.4)] hover:scale-105 transform hover:-translate-y-1 font-mono uppercase tracking-wider animate-button-pulse-alt"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
