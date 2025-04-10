
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
      title: "Resolution Enhancement of 250 MHz Quantitative Acoustic Microscopy Using a Quantum Denoising-Based RED Scheme",
      event: "IEEE International Ultrasonics Symposium (IUS) 2024",
      date: "September 24, 2024",
      location: "Taipei, Taiwan",
      description: "Presented research on quantum-inspired Analytical framework for enhancing resolution in high-frequency acoustic microscopy images."
    },
    {
      title: "Biomechanical Properties Change in the Peri-Equatorial Region in Myopic Guinea Pig Sclera: Insights Toward Location of Early Changes During Myopization",
      event: "Association for Research in Vision and Ophthalmology (ARVO) 2024",
      date: "May 7, 2024",
      location: "Seattle, WA, USA",
      description: "Shared findings on early biomechanical changes in myopia using high-resolution acoustic microscopy in animal models."
    },
    {
      title: "Biomechanical and Microstructural Changes in Posterior Myopic Guinea Pig",
      event: "Acoustics 2023 Conference (Acoustical Society of America)",
      date: "December 6, 2023",
      location: "Sydney, Australia",
      description: "Discussed posterior scleral remodeling in myopia progression through acoustic property analysis."
    },
    {
      title: "Computed Tomography Image Restoration Using a Quantum-Based Deep Unrolled Denoiser and a Plug-and-Play Framework",
      event: "European Signal Processing Conference (EUSIPCO) 2023",
      date: "September 6, 2023",
      location: "Helsinki, Finland",
      description: "Presented a novel plug-and-play CT image restoration pipeline using quantum-inspired deep unfolding framework.",
      slidesLink: "https://github.com/SayantanDutta95/presentation_posters/blob/main/EUSIPCO2023_Presentation.pdf"
    },
    {
      title: "Deep Unfolding of Image Denoising by Quantum Interactive Patches",
      event: "IEEE International Conference on Image Processing (ICIP) 2022",
      date: "October 18, 2022",
      location: "Bordeaux, France",
      description: "Presented a patch-wise denoising framework inspired by quantum many-body interactions within deep unfolding model.",
      slidesLink: "https://github.com/SayantanDutta95/presentation_posters/blob/main/Presentations__ICIP_2022.pdf"
    },
    {
      title: "Adaptive Contrast Enhancement of Cardiac Ultrasound Images using a Deep Unfolded Many-Body Quantum Algorithm",
      event: "IEEE International Ultrasonics Symposium (IUS) 2022",
      date: "October 18, 2022",
      location: "Venice, Italy",
      description: "Demonstrated contrast enhancement in cardiac ultrasound using a deep many-body quantum architecture."
    },
    {
      title: "Quantum Denoising-Based Super-Resolution Algorithm Applied to Dental Tomography Images",
      event: "IEEE International Symposium on Biomedical Imaging (ISBI) 2022",
      date: "March 30, 2022",
      location: "Kolkata, India",
      description: "Showcased a quantum-enhanced super-resolution technique for improving dental tomography imaging.",
    },
    {
      title: "Poisson Image Deconvolution by a Plug-and-Play Quantum Denoising Scheme",
      event: "European Signal Processing Conference (EUSIPCO) 2021",
      date: "August 24, 2021",
      location: "Dublin, Ireland",
      description: "Presented a plug-and-play framework for Poisson image deconvolution using a quantum-inspired denoiser, tailored for photon-limited imaging scenarios.",
    }
  ];

  const posterPresentations: Presentation[] = [
    {
      title: "Unsupervised Physics-Inspired Deep Learning Network with Application to Dental Computed Tomography Image Restoration",
      event: "IEEE International Symposium on Biomedical Imaging (ISBI) 2024",
      date: "May 29, 2024",
      location: "Athens, Greece",
      description: "Showcased research on an unsupervised deep learning approach inspired by quantum physics-based priors for dental CT denoising.",
      link: "https://github.com/SayantanDutta95/presentation_posters/blob/main/ISBI_poster_2024_on_Unsupervised_DIVA_and_CBCT.pdf"
    },
    {
      title: "A Quantum Denoising-Based RED Framework for 250-MHz & 500-MHz Quantitative Acoustic-Microscopy Resolution Enhancement",
      event: "IEEE International Symposium on Biomedical Imaging (ISBI) 2024",
      date: "May 28, 2024",
      location: "Athens, Greece",
      description: "Displayed a RED-based framework leveraging quantum denoising for enhancing QAM resolution at 250/500 MHz.",
      link: "https://github.com/SayantanDutta95/presentation_posters/blob/main/ISBI_poster_2024_on_QAM.pdf"
    },
    {
      title: "Quantum Algorithm for Signal Denoising",
      event: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP) 2024",
      date: "April 16, 2024",
      location: "Seoul, South Korea",
      description: "Shared a novel quantum denoising algorithm applicable to both classical and quantum signals by leveraging quantum properties.",
      link: "https://github.com/SayantanDutta95/presentation_posters/blob/main/ICASSP_poster_2024.pdf"
    },    
    {
      title: "Image Denoising Inspired by Quantum Many-Body Physics",
      event: "IEEE International Conference on Image Processing (ICIP) 2021",
      date: "September 21, 2021",
      location: "Anchorage, AK, USA",
      description: "Proposed a quantum many-body denoising method that enhances image quality in low SNR regimes using principles from quantum interaction theory."
    },    
    {
      title: "Despeckling Ultrasound Images Using Quantum Many-Body Physics",
      event: "IEEE International Ultrasonics Symposium (IUS) 2021",
      date: "September 14, 2021",
      location: "Xi'an, China",
      description: "Applied quantum interaction models to suppress speckle noise in ultrasound image data."
    },    
    {
      title: "Signal and Image Processing Inspired by Quantum Mechanics: Application to Denoising",
      event: "Vienna Center for Quantum Science and Technology Summer School 2021",
      date: "September 9, 2021",
      location: "Vienna, Austria",
      description: "Presented a conceptual framework linking quantum mechanics and signal processing for denoising applications."
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
