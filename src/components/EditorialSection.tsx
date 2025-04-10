
import React from 'react';
import { FileEdit, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EditorialRole {
  journal: string;
  role: string;
  period: string;
  publisher: string;
  description: string;
  link: string;
  impactFactor?: string;
}

const EditorialSection: React.FC = () => {
  const editorialRoles: EditorialRole[] = [
    {
      journal: "Journal on Image and Video Processing",
      role: "Guest Editor",
      period: "2023 - 2024",
      publisher: "EURASIP",
      description: "As a Guest Editor, I oversee the review process for submissions focusing on recent advances in Plug-and-Play methods for computational imaging. I led a special issue titled \"Recent Advances in Plug-and-Play Methods for Signal, Image and Video Processing: Theory, Algorithms, and Applications.\"",
      link: "https://www.springeropen.com/collections/rappm",
      impactFactor: "2.2"
    }
  ];

  return (
    <section id="editorial-experience" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Editorial Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {editorialRoles.map((role, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <FileEdit size={20} className="text-primary mr-2" />
                  <CardTitle className="font-serif text-lg">{role.journal}</CardTitle>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{role.role}</span>
                  <span className="text-muted-foreground flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {role.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{role.description}</p>
                <div className="flex justify-between text-sm">
                  <span>Publisher: {role.publisher}</span>
                  {role.impactFactor && (
                    <span className="font-medium">Impact Factor: {role.impactFactor}</span>
                  )}
                </div>
                <a 
                  href={role.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-primary hover:underline text-sm"
                >
                  Journal Website <ExternalLink size={16} className="ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
