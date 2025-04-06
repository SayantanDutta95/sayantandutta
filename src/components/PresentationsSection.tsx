
import React, { useState } from 'react';
import { Mic, ImageIcon, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Presentation {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  link?: string;
  slidesLink?: string;
}

const PresentationsSection: React.FC = () => {
  const oralPresentations: Presentation[] = [
    {
      title: "Transformer-based Models for Low-Resource Languages",
      event: "ACL 2023",
      date: "July 12, 2023",
      location: "Toronto, Canada",
      description: "Presented research on adapting transformer-based models to low-resource language contexts with minimal training data.",
      link: "https://example.com/acl-presentation",
      slidesLink: "https://example.com/slides-toronto"
    },
    {
      title: "Ethics in Large Language Models",
      event: "AI Ethics Summit",
      date: "March 3, 2023",
      location: "Virtual",
      description: "Gave a keynote speech on ethical considerations and responsible development of large language models.",
      link: "https://example.com/ethics-talk",
      slidesLink: "https://example.com/slides-ethics"
    },
    {
      title: "Cross-lingual Transfer Learning for NLP",
      event: "EMNLP 2022",
      date: "December 10, 2022",
      location: "Abu Dhabi, UAE",
      description: "Presented a novel approach to cross-lingual transfer learning that improves performance on low-resource target languages.",
      slidesLink: "https://example.com/slides-emnlp"
    }
  ];

  const posterPresentations: Presentation[] = [
    {
      title: "Visualizing Attention in Neural Machine Translation",
      event: "NeurIPS 2023",
      date: "December 15, 2023",
      location: "New Orleans, USA",
      description: "Presented a poster on novel techniques to visualize and interpret attention mechanisms in neural machine translation models.",
      link: "https://example.com/neurips-poster"
    },
    {
      title: "Efficient Fine-tuning of Language Models",
      event: "ICML 2022",
      date: "July 22, 2022",
      location: "Baltimore, USA",
      description: "Showcased research on parameter-efficient fine-tuning methods for large language models.",
      link: "https://example.com/icml-poster"
    },
    {
      title: "Multimodal Learning for Healthcare Applications",
      event: "ML4H Workshop at NeurIPS",
      date: "December 8, 2021",
      location: "Virtual",
      description: "Presented research on combining text, image, and structured data for healthcare diagnostic applications.",
      link: "https://example.com/ml4h-poster"
    }
  ];

  return (
    <section id="presentations" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Presentations</h2>
        
        <Tabs defaultValue="oral" className="mt-12">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="oral" className="flex items-center">
              <Mic className="h-4 w-4 mr-2" />
              Oral Presentations
            </TabsTrigger>
            <TabsTrigger value="poster" className="flex items-center">
              <ImageIcon className="h-4 w-4 mr-2" />
              Poster Presentations
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="oral">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {oralPresentations.map((presentation, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <Mic size={18} className="text-primary mr-2" />
                      <Badge variant="outline" className="ml-auto">Oral</Badge>
                    </div>
                    <CardTitle className="text-lg font-serif">{presentation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium mb-4">{presentation.event}</p>
                    <div className="flex flex-col space-y-2 mb-4 text-sm">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2 text-muted-foreground" />
                        <span>{presentation.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 text-muted-foreground" />
                        <span>{presentation.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{presentation.description}</p>
                    <div className="flex space-x-2 mt-2">
                      {presentation.slidesLink && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-xs"
                          onClick={() => window.open(presentation.slidesLink, '_blank')}
                        >
                          Slides
                        </Button>
                      )}
                      {presentation.link && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-xs"
                          onClick={() => window.open(presentation.link, '_blank')}
                        >
                          Recording
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="poster">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posterPresentations.map((presentation, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <ImageIcon size={18} className="text-primary mr-2" />
                      <Badge variant="outline" className="ml-auto">Poster</Badge>
                    </div>
                    <CardTitle className="text-lg font-serif">{presentation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium mb-4">{presentation.event}</p>
                    <div className="flex flex-col space-y-2 mb-4 text-sm">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2 text-muted-foreground" />
                        <span>{presentation.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 text-muted-foreground" />
                        <span>{presentation.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{presentation.description}</p>
                    {presentation.link && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        onClick={() => window.open(presentation.link, '_blank')}
                      >
                        View Poster
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PresentationsSection;
