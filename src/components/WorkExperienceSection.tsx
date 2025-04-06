
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const WorkExperienceSection: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      role: "Research Scientist",
      company: "Advanced AI Institute",
      location: "Cambridge, UK",
      period: "2021 - Present",
      description: [
        "Leading research initiatives in natural language processing and machine learning",
        "Developed and implemented novel transformer-based architectures for multilingual text analysis",
        "Managed a team of 3 PhD students and collaborated with international research partners"
      ]
    },
    {
      role: "Assistant Professor",
      company: "University of Technology",
      location: "Boston, USA",
      period: "2018 - 2021",
      description: [
        "Taught undergraduate and graduate courses in Artificial Intelligence and Machine Learning",
        "Supervised 5 master's theses and 2 PhD dissertations",
        "Secured $1.2M in research grants from national and international funding bodies"
      ]
    },
    {
      role: "Postdoctoral Researcher",
      company: "National Research Laboratory",
      location: "Berlin, Germany",
      period: "2016 - 2018",
      description: [
        "Conducted research on computational linguistics and sentiment analysis",
        "Published 7 papers in top-tier conferences and journals",
        "Developed open-source tools for low-resource language processing"
      ]
    }
  ];

  return (
    <section id="work-experience" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="grid grid-cols-1 gap-6 mt-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-serif">{exp.role}</CardTitle>
                    <p className="text-lg text-muted-foreground mt-1">{exp.company} | {exp.location}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
