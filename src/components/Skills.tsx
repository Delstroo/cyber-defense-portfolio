
import { Shield, Lock, Terminal, Eye, AlertTriangle, Database, Network, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Threat Detection & Analysis",
      icon: Eye,
      skills: ["SIEM Management", "Malware Analysis", "Digital Forensics", "Threat Intelligence"],
      color: "text-red-400"
    },
    {
      title: "Security Architecture",
      icon: Shield,
      skills: ["Zero Trust Implementation", "Network Security", "Cloud Security", "Risk Assessment"],
      color: "text-cyan-400"
    },
    {
      title: "Incident Response",
      icon: AlertTriangle,
      skills: ["Crisis Management", "Breach Investigation", "Recovery Planning", "Communication"],
      color: "text-yellow-400"
    },
    {
      title: "Penetration Testing",
      icon: Terminal,
      skills: ["Vulnerability Assessment", "Web App Testing", "Network Penetration", "Social Engineering"],
      color: "text-green-400"
    },
    {
      title: "Compliance & Governance",
      icon: Lock,
      skills: ["GDPR", "SOX", "HIPAA", "ISO 27001", "Risk Management"],
      color: "text-blue-400"
    },
    {
      title: "Technical Skills",
      icon: Code,
      skills: ["Python", "PowerShell", "Linux", "Wireshark", "Metasploit", "Burp Suite"],
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Core Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive cybersecurity skills across multiple domains and technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <category.icon className={`w-12 h-12 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')}`}></div>
                      <span className="text-gray-300">{skill}</span>
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
