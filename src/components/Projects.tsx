
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Zap, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise SIEM Implementation",
      description: "Designed and deployed a comprehensive SIEM solution for a Fortune 500 company, reducing incident response time by 60% and improving threat detection accuracy.",
      technologies: ["Splunk", "ELK Stack", "Python", "PowerShell"],
      icon: Shield,
      category: "Security Operations"
    },
    {
      title: "Zero Trust Network Architecture",
      description: "Led the implementation of a zero trust security model, including identity verification, device compliance, and micro-segmentation strategies.",
      technologies: ["Microsoft Azure", "Okta", "Palo Alto", "Terraform"],
      icon: Lock,
      category: "Network Security"
    },
    {
      title: "Automated Threat Response System",
      description: "Developed an automated incident response system that integrates with multiple security tools to provide rapid threat containment and remediation.",
      technologies: ["Python", "REST APIs", "Docker", "Kubernetes"],
      icon: Zap,
      category: "Automation"
    },
    {
      title: "Cloud Security Assessment Tool",
      description: "Created a comprehensive security assessment tool for AWS and Azure environments, identifying misconfigurations and compliance violations.",
      technologies: ["Python", "AWS CLI", "Azure CLI", "Terraform"],
      icon: Shield,
      category: "Cloud Security"
    }
  ];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world cybersecurity solutions that have made a measurable impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/60 border-gray-800 hover:bg-black/80 transition-all duration-300 hover:scale-105 group shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <Badge variant="secondary" className="bg-gray-800 text-cyan-400 border-cyan-400/30">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
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
