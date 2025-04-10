
import React from 'react';
import { GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SummerSchool {
  name: string;
  organizer: string;
  location: string;
  date: string;
  description: string;
  credentialLink?: string;
  topics: string[];
}

const SummerSchoolsSection: React.FC = () => {
  const schools: SummerSchool[] = [
    {
      name: "Methodological and Societal Challenges of Deep Learning",
      organizer: "GRETSI, France",
      location: "Peyresq, France",
      date: "June - July 2022",
      description: "Explore cutting-edge advancements in deep learning, tackling methodological and societal challenges. Engage in hands-on programming exercises and insightful research talks addressing domain adaptation, privacy-preserving techniques, ethical considerations in AI, natural language processing (NLP), data explainability challenges, and hardware acceleration.",
      credentialLink: "https://gretsi.fr/peyresq22/",
      topics: ["Domain Adaptation", "Privacy-Preserving", "Ethical Issues in AI", "NLP", "Data Explainability Challenges", "Hardware Acceleration"]
    },
    {
      name: "Quantum Sensing and Imaging",
      organizer: "Vienna Center for Quantum Science and Technology, Vienna University of Technology",
      location: "Vienna, Austria",
      date: "September 2021",
      description: "Delve into the forefront of quantum sensing and imaging technologies. Participate in practical workshops and research discussions covering quantum sensing, imaging with entangled photons, quantum circuits, and advanced quantum algorithms.",
      credentialLink: "https://vcq.quantum.at/summer-school-2021/",
      topics: ["Quantum Sensing", "Imaging with Entangled Photons", "Quantum Circuits", "Quantum Algorithms"]
    },
    {
      name: "Signal and Image Processing for the Co-design of Innovative Imaging Systems: Physics, Mathematics, Algorithms",
      organizer: "GRETSI, France",
      location: "Peyresq, France",
      date: "June 2021",
      description: "Immerse yourself in the integration of physics, mathematics, and algorithms for innovative imaging systems. Engage in hands-on programming exercises and research talks covering image acquisition physics, Bayesian optimization, and mathematical aspects of inverse problems.",
      credentialLink: "https://gretsi.fr/peyresq20/",
      topics: ["Image Acquisition Physics", "Bayesian Optimization", "Mathematical Aspects of Inverse Problems"]
    },
    {
      name: "Summer School on Image Processing",
      organizer: "The University of Szeged",
      location: "Szeged, Hungary",
      date: "July 2020",
      description: "Focus on applying machine learning to healthcare challenges, including medical imaging and real-time patient data analysis. Explore topics such as computer vision in 2D and 3D, tomography image reconstruction, satellite imagery analysis, flaws in neural networks, and real-time navigation in medical procedures.",
      credentialLink: "https://www.inf.u-szeged.hu/~ssip/2020/index.php/planned-program/",
      topics: ["Computer Vision in 2D and 3D", "Tomography Image Reconstruction", "Satellite Imagery", "Medical Imaging", "Flaws in Neural Networks", "Real-Time Navigation in Medical Procedures"]
    }
  ];

  return (
    <section id="summer-schools" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Summer Schools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {schools.map((school, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow flex flex-col">
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
              <CardContent className="space-y-4 flex-1">
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
              
              {school.credentialLink && (
                <CardFooter>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center justify-center"
                    onClick={() => window.open(school.credentialLink, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-2" />
                    View Program Details
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerSchoolsSection;
