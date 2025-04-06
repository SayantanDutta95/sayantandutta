
import React from 'react';
import { Video, Calendar, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Webinar {
  title: string;
  organizer: string;
  date: string;
  attendees: string;
  description: string;
  recordingLink?: string;
  slidesLink?: string;
}

const WebinarsSection: React.FC = () => {
  const webinars: Webinar[] = [
    {
      title: "Recent Advances in Large Language Models",
      organizer: "AI Research Institute",
      date: "September 15, 2023",
      attendees: "1,200+",
      description: "Discussed the latest developments in large language models, focusing on scaling laws, emergent abilities, and alignment techniques.",
      recordingLink: "https://example.com/llm-webinar",
      slidesLink: "https://example.com/llm-slides"
    },
    {
      title: "Ethical Considerations in Developing AI Systems",
      organizer: "Tech Ethics Initiative",
      date: "May 22, 2023",
      attendees: "850",
      description: "Presented frameworks for ethical development of AI systems, with case studies focusing on bias mitigation and transparency.",
      recordingLink: "https://example.com/ethics-webinar"
    },
    {
      title: "Cross-lingual Transfer Learning in NLP",
      organizer: "Global NLP Conference",
      date: "January 10, 2023",
      attendees: "600",
      description: "Explored techniques for transferring knowledge across languages in natural language processing applications.",
      slidesLink: "https://example.com/crosslingual-slides"
    },
    {
      title: "Multimodal Learning for Scientific Applications",
      organizer: "Scientific AI Network",
      date: "October 5, 2022",
      attendees: "450",
      description: "Discussed approaches for combining text, image, and structured data in scientific research contexts.",
      recordingLink: "https://example.com/multimodal-webinar",
      slidesLink: "https://example.com/multimodal-slides"
    }
  ];

  return (
    <section id="webinars" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Invited Webinars</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {webinars.map((webinar, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <Video size={20} className="text-primary mr-2" />
                </div>
                <CardTitle className="text-xl font-serif">{webinar.title}</CardTitle>
                <p className="text-muted-foreground mt-1">{webinar.organizer}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-muted-foreground" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-2 text-muted-foreground" />
                    <span>{webinar.attendees} attendees</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">{webinar.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                {webinar.recordingLink && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center"
                    onClick={() => window.open(webinar.recordingLink, '_blank')}
                  >
                    <Video size={14} className="mr-2" />
                    Watch Recording
                  </Button>
                )}
                
                {webinar.slidesLink && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center"
                    onClick={() => window.open(webinar.slidesLink, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-2" />
                    View Slides
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarsSection;
