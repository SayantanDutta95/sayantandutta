
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
      title: "Quantum Mechanics-Based Image Processing and Medical Applications",
      organizer: "Journal of Electronic Imaging (SPIE Webinar)",
      date: "November 19, 2024",
      attendees: "200+",
      description: "This webinar delved into the latest advancements in quantum mechanics-based imaging, with a particular focus on medical applications. It covered current challenges in the field and explored the future potential of these innovative technologies.",
      recordingLink: "https://www.spiedigitallibrary.org/jei-webinar-quantum-imaging",
      slidesLink: "https://www.spiedigitallibrary.org/jei-webinar-quantum-imaging"
    },
    {
      title: "Exploring Innovative Image Restoration Approaches: A Quantum Mechanics-Inspired Paradigm with Medical Imaging Applications",
      organizer: "European Association for Signal Processing (EURASIP)",
      date: "May 15, 2024",
      attendees: "100+",
      description: "This presentation introduced frameworks for a quantum mechanics-inspired paradigm in image restoration, emphasizing medical applications. It highlighted current challenges and discussed the future potential of these approaches.",
      recordingLink: "https://www.youtube.com/watch?v=QIiHoVTRHvE"
    },
    {
      title: "Novel Prospects of Image Restoration Inspired by Concepts of Quantum Mechanics",
      organizer: "IEEE Signal Processing Society (SPS)",
      date: "March 9, 2023",
      attendees: "500+",
      description: "This event explored various techniques for quantum mechanics-based imaging and the design of deep-learning models tailored for medical imaging applications. It provided insights into the current state of the field and future directions.",
      recordingLink: "https://rc.signalprocessingsociety.org/education/webinars/spsweb23008",
      slidesLink: "https://rc.signalprocessingsociety.org/education/webinars/spsweb23008"
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
