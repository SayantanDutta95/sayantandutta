
import React from 'react';
import { FlaskConical, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ResearchLab {
  name: string;
  institution: string;
  role: string;
  period: string;
  description: string;
  link: string;
}

const ResearchLabsSection: React.FC = () => {
  const labs: ResearchLab[] = [
    {
      name: "Cognitive Computing Laboratory",
      institution: "University of Technology",
      role: "Lead Researcher",
      period: "2021 - Present",
      description: "Focused on developing artificial neural networks that mimic human cognitive processes for improved decision-making and reasoning capabilities.",
      link: "https://example.com/cclab"
    },
    {
      name: "NLP Innovation Center",
      institution: "Advanced AI Institute",
      role: "Principal Investigator",
      period: "2019 - Present",
      description: "Working on transformer-based models and their applications to low-resource languages and specialized domains.",
      link: "https://example.com/nlp-center"
    },
    {
      name: "Human-Computer Interaction Lab",
      institution: "National Research Laboratory",
      role: "Visiting Researcher",
      period: "2017 - 2018",
      description: "Collaborated on projects involving multimodal interfaces and accessible technology systems for diverse user groups.",
      link: "https://example.com/hci-lab"
    }
  ];

  return (
    <section id="research-labs" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Research Labs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {labs.map((lab, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-serif">{lab.name}</CardTitle>
                  <p className="text-muted-foreground">{lab.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium">{lab.role}</span>
                  <span className="text-sm text-muted-foreground">{lab.period}</span>
                </div>
                <p className="text-muted-foreground mb-4">{lab.description}</p>
                <a 
                  href={lab.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-primary hover:underline"
                >
                  Visit Lab Website <ExternalLink size={16} className="ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchLabsSection;
