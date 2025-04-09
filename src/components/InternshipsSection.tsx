
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Internship {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

const InternshipsSection: React.FC = () => {
  const internships: Internship[] = [
    {
      role: "Research Intern",
      company: "Université Paul Sabatier: IRIT & LPT Labs",
      location: "Toulouse, France",
      period: "April - July 2019",
      description: "Developed an adaptive algorithm for medical signal and image denoising. Implemented novel adaptive strategies that significantly improved denoising performance.",
      technologies: ["Quantum Computing", "Matlab", "Computational Imaging", "Inverse Problems"]
    },
    {
      role: "Summer Intern",
      company: "The University of Burdwan",
      location: "Bardhaman, West Bengal, India",
      period: "May - Jun 2017",
      description: "Conducted a rudimentary study on the mathematical foundation of quantum mechanics.",
      technologies: ["Quantum Mechanics", "Mathematical Foundation", "Matlab"]
    },
    {
      role: "Research Intern",
      company: "Vivekananda Mahavidyala - Burdwan",
      location: "Bardhaman, West Bengal, India",
      period: "July - September 2014",
      description: "Performed linear instability analysis of a finite amplitude long wave flowing down an inclined plane. Developed a novel mathematical model for stability analysis in laminar flow.",
      technologies: ["Matlab", "Stability Analysis", "Fluid Mechanics"]
    }
  ];

  return (
    <section id="internships" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Internships</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {internships.map((internship, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-serif">{internship.company}</CardTitle>
                    <p className="text-muted-foreground text-sm">{internship.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-muted-foreground" />
                    <span>{internship.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-muted-foreground" />
                    <span>{internship.location}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">{internship.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-blue-50 text-blue-700 text-xs py-1 px-2 rounded-md"
                    >
                      {tech}
                    </span>
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

export default InternshipsSection;
