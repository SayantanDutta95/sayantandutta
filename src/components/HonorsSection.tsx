
import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Honor {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

const HonorsSection: React.FC = () => {
  const honors: Honor[] = [
    {
      title: "IEEE Signal Processing Society's Top 25 Downloaded Articles",
      organization: "IEEE Open Journal of Signal Processing",
      year: "2022",
      description: "Recognition for article being among the most downloaded in the journal"
    },
    {
      title: "Best Presentation Award",
      organization: "ACNCP, Jadavpur University",
      year: "2019",
      description: "Awarded for outstanding presentation at the conference in Kolkata, India"
    },
    {
      title: "Master Fellowship",
      organization: "Université de Tours",
      year: "2018 – 2019",
      description: "Fellowship awarded for excellent academic achievements in Tours, France"
    },
    {
      title: "DST-Inspire Master Scholarship",
      organization: "Government of India",
      year: "2016 – 2018",
      description: "Prestigious scholarship awarded for excellent academic results"
    },
    {
      title: "DST-Inspire Undergraduate Scholarship",
      organization: "Government of India",
      year: "2013 – 2016",
      description: "Scholarship awarded for excellent academic performance"
    },
    {
      title: "3rd Place, Student Poster Presentation Competition",
      organization: "Government of India",
      year: "2013",
      description: "Recognition for 12th grade High School poster presentation"
    }
  ];

  return (
    <section id="honors" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Honors & Awards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {honors.map((honor, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <CardTitle className="text-lg font-serif">{honor.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <p className="font-medium">{honor.organization}</p>
                  <p className="text-muted-foreground flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {honor.year}
                  </p>
                </div>
                {honor.description && (
                  <p className="text-sm text-muted-foreground">{honor.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;
