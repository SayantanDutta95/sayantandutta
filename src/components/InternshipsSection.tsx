
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
      company: "Google Research",
      location: "Mountain View, CA, USA",
      period: "Summer 2020",
      description: "Worked on improving BERT-based models for question answering tasks. Implemented novel fine-tuning strategies that improved performance on the SQuAD benchmark by 2.3%.",
      technologies: ["PyTorch", "TensorFlow", "BERT", "NLP"]
    },
    {
      role: "AI Research Intern",
      company: "DeepMind",
      location: "London, UK",
      period: "Summer 2019",
      description: "Researched reinforcement learning algorithms for natural language generation. Developed a novel reward model for generating coherent and engaging dialogue responses.",
      technologies: ["Python", "PyTorch", "RL", "NLG"]
    },
    {
      role: "NLP Intern",
      company: "Microsoft Research",
      location: "Cambridge, UK",
      period: "Summer 2018",
      description: "Contributed to improving multilingual capabilities of language models. Created evaluation datasets for 5 low-resource languages and implemented cross-lingual transfer techniques.",
      technologies: ["Python", "NLTK", "spaCy", "Transformers"]
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
