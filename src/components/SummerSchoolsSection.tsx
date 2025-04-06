
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SummerSchool {
  name: string;
  organizer: string;
  location: string;
  date: string;
  description: string;
  topics: string[];
}

const SummerSchoolsSection: React.FC = () => {
  const schools: SummerSchool[] = [
    {
      name: "Deep Learning Summer School",
      organizer: "Montreal Institute for Learning Algorithms (MILA)",
      location: "Montreal, Canada",
      date: "July 2022",
      description: "Intensive two-week program covering advanced topics in deep learning with hands-on sessions led by top researchers in the field.",
      topics: ["Graph Neural Networks", "Generative Models", "Self-Supervised Learning"]
    },
    {
      name: "NLP Summer School",
      organizer: "Oxford University",
      location: "Oxford, UK",
      date: "August 2021",
      description: "Focused on advanced natural language processing techniques and transformer architectures with practical workshops and research discussions.",
      topics: ["Transformers", "Multilingual NLP", "Semantic Parsing"]
    },
    {
      name: "Reinforcement Learning Summer School",
      organizer: "University of Alberta",
      location: "Edmonton, Canada",
      date: "June 2020",
      description: "Covered fundamental and advanced concepts in reinforcement learning with hands-on programming exercises and research talks.",
      topics: ["Deep RL", "Policy Gradients", "Multi-agent RL"]
    },
    {
      name: "Machine Learning for Healthcare Summer School",
      organizer: "MIT",
      location: "Cambridge, USA",
      date: "July 2019",
      description: "Focused on applications of machine learning to healthcare challenges, including medical imaging, patient data analysis, and clinical decision support.",
      topics: ["Medical Imaging", "Clinical NLP", "Time Series Analysis"]
    }
  ];

  return (
    <section id="summer-schools" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Summer Schools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {schools.map((school, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-serif">{school.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{school.organizer}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-muted-foreground" />
                    <span>{school.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-muted-foreground" />
                    <span>{school.location}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">{school.description}</p>
                
                <div>
                  <p className="text-sm font-medium mb-2">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {school.topics.map((topic, i) => (
                      <Badge key={i} variant="secondary">{topic}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerSchoolsSection;
