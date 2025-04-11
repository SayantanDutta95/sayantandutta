
import React from 'react';
import { Github, ExternalLink, Atom, Image, Microscope, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

interface ResearchArea {
  title: string;
  icon: React.ReactNode;
  projects: Project[];
  badgeColor: string;
}

const ProjectsSection: React.FC = () => {
  const researchAreas: ResearchArea[] = [
    {
      title: "Quantum Mechanics Based Image Processing",
      icon: <Image className="text-primary" size={24} />,
      badgeColor: "bg-blue-50 text-blue-700 hover:bg-blue-100",
      projects: [
        {
          title: "De-QuIP: Quantum Mechanics-Inspired Denoising",
          description: "A novel framework for image restoration inspired by quantum mechanics concepts, focusing on efficient denoising algorithms for medical and scientific imaging applications.",
          image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&h=400&q=80",
          technologies: ["Python", "NumPy", "SciPy", "Quantum Mechanics", "Image Processing"],
          githubLink: "https://github.com/SayantanDutta95/De-QuIP-Denoising"
        },
        {
          title: "Quantum Many-Body System Image Decomposition",
          description: "Framework for advanced image decomposition using quantum many-body interaction theory, enabling superior feature extraction and reconstruction capabilities.",
          image: "https://images.unsplash.com/photo-1635070036577-9705c6273f6f?auto=format&fit=crop&w=600&h=400&q=80",
          technologies: ["Python", "TensorFlow", "Quantum Physics", "Image Analysis"]
        }
      ]
    },
    {
      title: "Quantum Computing for Imaging",
      icon: <Atom className="text-primary" size={24} />,
      badgeColor: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
      projects: [
        {
          title: "Quantum Circuit Noise Reduction",
          description: "Tools for identifying and reducing internal circuit noise in quantum processors, improving computational accuracy and reliability of quantum algorithms for imaging applications.",
          image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&h=400&q=80",
          technologies: ["Qiskit", "Python", "Quantum Computing", "Signal Processing"]
        },
        {
          title: "Adaptive Quantum State Thresholding",
          description: "Innovative techniques for adaptive thresholding of noisy quantum states, enhancing the fidelity of quantum information processing for improved image reconstruction.",
          image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&h=400&q=80",
          technologies: ["Python", "QuTiP", "Quantum Information", "Statistical Methods"]
        }
      ]
    },
    {
      title: "Quantitative Microscopy Ultrasound",
      icon: <Microscope className="text-primary" size={24} />,
      badgeColor: "bg-green-50 text-green-700 hover:bg-green-100",
      projects: [
        {
          title: "RED-ADMM De-QuIP for Ultrasound Microscopy",
          description: "Combined regularization by denoising (RED) with alternating direction method of multipliers (ADMM) for high-resolution ultrasound microscopy image enhancement.",
          image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=600&h=400&q=80",
          technologies: ["MATLAB", "Image Processing", "Optimization", "Ultrasound Imaging"],
          githubLink: "https://github.com/SayantanDutta95/RED-ADMM-De-QuIP"
        },
        {
          title: "Tissue Characterization with Acoustic Microscopy",
          description: "Research on extracting acoustical and mechanical properties of soft tissues at microscopic resolution using advanced quantitative acoustic microscopy techniques.",
          image: "https://images.unsplash.com/photo-1578496479937-53c8c9087b14?auto=format&fit=crop&w=600&h=400&q=80",
          technologies: ["Signal Processing", "Tissue Analysis", "Acoustic Microscopy", "Python"]
        }
      ]
    },
    {
      title: "Medical Imaging",
      icon: <FileImage className="text-primary" size={24} />,
      badgeColor: "bg-purple-50 text-purple-700 hover:bg-purple-100",
      projects: [
        {
          title: "Cardiac Ultrasound Image Enhancement",
          description: "Advanced techniques for enhancing cardiac ultrasound images to improve diagnostic capabilities and visualization of cardiac structures and function.",
          image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&h=400&q=80",
          technologies: ["MATLAB", "Deep Learning", "Ultrasound Imaging", "Image Enhancement"],
          githubLink: "https://github.com/SayantanDutta95/Cardiac-USimage-Enhancement",
          demoLink: "https://github.com/SayantanDutta95/Cardiac-USimage-Enhancement/blob/main/Restored_Cardiac_images/patient02_movie.gif"
        },
        {
          title: "Computed Tomography Image Reconstruction",
          description: "Research on advanced techniques for reconstruction and restoration in computed tomography imaging to improve medical diagnostics.",
          image: "https://images.unsplash.com/photo-1584553391498-8d31f30f2018?auto=format&fit=crop&w=600&h=400&q=80",
          technologies: ["Image Reconstruction", "CT Imaging", "Python", "Medical Diagnostics"]
        }
      ]
    }
  ];

  return (
    <section id="projects" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Research Projects</h2>
        
        {researchAreas.map((area, areaIndex) => (
          <div key={areaIndex} className={areaIndex > 0 ? "mt-16" : "mt-12"}>
            <div className="flex items-center mb-6">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                {area.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold">{area.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {area.projects.map((project, index) => (
                <Card 
                  key={index}
                  className="bg-white overflow-hidden border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-serif">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline"
                          className={area.badgeColor}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 flex gap-2">
                    {project.githubLink && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex items-center gap-1"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github size={16} /> View on GitHub
                      </Button>
                    )}
                    
                    {project.demoLink && (
                      <Button 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => window.open(project.demoLink, '_blank')}
                      >
                        <ExternalLink size={16} /> View Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {areaIndex < researchAreas.length - 1 && (
              <Separator className="my-4" />
            )}
          </div>
        ))}
        
        <div className="text-center mt-16">
          <Button 
            onClick={() => window.open("https://github.com/SayantanDutta95", "_blank")}
            className="flex items-center gap-2 mx-auto"
          >
            <Github size={20} />
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
