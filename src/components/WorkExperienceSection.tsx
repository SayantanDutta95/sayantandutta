
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description?: string[];
  project?: string;
  supervisor?: string;
}

const WorkExperienceSection: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      role: "Senior AI Scientist",
      company: "Advanced Technology Group, GE HealthCare",
      location: "Bangalore, India",
      period: "Nov 2024 - Present",
      description: [
        "Leading research on cardiac CT image enhancement using deep learning and physics-based models",
        "Investigating foundational aspects of CT and MR image reconstruction",
        "Designing simulation frameworks to generate realistic synthetic medical imaging datasets for deep learning",
        "Developing novel unrolled deep learning architectures exploiting quantum theory for medical image reconstruction"
      ]
    },  
    {
      role: "Postdoctoral Associate",
      company: "Weill Cornell Medicine, Department of Radiology",
      location: "New York, USA",
      period: "Apr 2023 - Oct 2024",
      description: [
        "Led research in quantitative acoustic microscopy (QAM) for soft tissue characterization",
        "Developed computational methods for medical image restoration and enhancement",
        "Performed high-resolution scans of soft-tissue sections from human and animal models",
        "Conducted statistical analysis of biomechanical and microstructural changes in ocular tissue affected by myopia",     
        "Designed and implemented novel frameworks to enhance 3D radio-frequency QAM data for improved tissue assessment"
      ]
    },
    {
      role: "Postdoctoral Associate",
      company: "CREATIS Laboratory, University of Lyon",
      location: "Lyon, France",
      period: "Feb 2023 - Mar 2023",
      description: [
        "Led development of physics-informed machine learning models for medical imaging applications",
        "Designed and implemented novel restoration techniques for echocardiographic image enhancement"
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
                {exp.project && (
                  <p className="mb-3 text-muted-foreground">
                    <span className="font-semibold">Project:</span> {exp.project}
                  </p>
                )}
                
                {exp.supervisor && (
                  <p className="text-sm text-gray-500 italic mb-3">
                    <span className="font-semibold">Supervisor:</span> {exp.supervisor}
                  </p>
                )}
                
                {exp.description && exp.description.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
