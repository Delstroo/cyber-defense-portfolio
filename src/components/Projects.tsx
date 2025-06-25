
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Zap, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise SIEM Implementation",
      description: "Designed and deployed a comprehensive SIEM solution for a Fortune 500 company, reducing incident response time by 60% and improving threat detection accuracy.",
      technologies: ["Splunk", "ELK Stack", "Python", "PowerShell"],
      icon: Shield,
      category: "Security Operations",
      glowColor: "rgba(6, 182, 212, 0.3)",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Zero Trust Network Architecture",
      description: "Led the implementation of a zero trust security model, including identity verification, device compliance, and micro-segmentation strategies.",
      technologies: ["Microsoft Azure", "Okta", "Palo Alto", "Terraform"],
      icon: Lock,
      category: "Network Security",
      glowColor: "rgba(59, 130, 246, 0.3)",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Automated Threat Response System",
      description: "Developed an automated incident response system that integrates with multiple security tools to provide rapid threat containment and remediation.",
      technologies: ["Python", "REST APIs", "Docker", "Kubernetes"],
      icon: Zap,
      category: "Automation",
      glowColor: "rgba(250, 204, 21, 0.3)",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Security Assessment Tool",
      description: "Created a comprehensive security assessment tool for AWS and Azure environments, identifying misconfigurations and compliance violations.",
      technologies: ["Python", "AWS CLI", "Azure CLI", "Terraform"],
      icon: Shield,
      category: "Cloud Security",
      glowColor: "rgba(34, 197, 94, 0.3)",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const handleProjectAction = (url: string, action: string) => {
    if (url === "#") {
      alert(`${action} functionality would be implemented here. Contact for more details.`);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-950 via-black to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced futuristic hexagonal pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-[pattern-shift_20s_linear_infinite]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Enhanced animated energy beams */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-[beam-flow_12s_ease-in-out_infinite] shadow-[0_0_20px_rgba(6,182,212,0.6)]"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent animate-[beam-flow_15s_ease-in-out_infinite_reverse] shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>
        <div className="absolute left-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent animate-[beam-flow-vertical_18s_ease-in-out_infinite] shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-8 h-8 border border-cyan-400/30 rotate-45 animate-[float-rotate_25s_ease-in-out_infinite] shadow-[0_0_25px_rgba(6,182,212,0.3)]"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 border border-green-400/30 rounded-full animate-[float-slow_30s_ease-in-out_infinite] shadow-[0_0_20px_rgba(34,197,94,0.3)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.5)] animate-[fade-slide-up_1s_ease-out]">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-gray-700/30 animate-[fade-slide-up_1s_ease-out_0.3s_both] transition-all duration-500 hover:bg-black/30 hover:border-gray-600/40">
            Real-world cybersecurity solutions that have made a measurable impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-800/50 hover:bg-black/60 transition-all duration-500 hover:scale-105 group shadow-2xl border-2 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] relative overflow-hidden animate-[fade-slide-up_1s_ease-out] transform hover:-translate-y-2" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
              {/* Enhanced card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-black/40 backdrop-blur-sm border transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                       style={{ 
                         borderColor: 'rgba(6, 182, 212, 0.3)',
                         boxShadow: `0 0 30px ${project.glowColor}`
                       }}>
                    <project.icon className="w-8 h-8 text-cyan-400 transition-all duration-500 group-hover:scale-110" 
                                  style={{ filter: `drop-shadow(0 0 10px ${project.glowColor})` }} />
                  </div>
                  <Badge variant="secondary" className="bg-black/40 backdrop-blur-sm text-cyan-400 border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-400 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-gray-700/50 bg-black/30 backdrop-blur-sm text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:scale-105">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => handleProjectAction(project.demoUrl, 'Demo')}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-cyan-400/30 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transform hover:-translate-y-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </Button>
                  <Button 
                    onClick={() => handleProjectAction(project.githubUrl, 'GitHub')}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-all duration-300 p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-600/10 hover:shadow-[0_0_20px_rgba(107,114,128,0.3)] hover:scale-105 transform hover:-translate-y-1"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
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
