
import React from 'react';
import { Github, ExternalLink, Atom, Image, FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  category: 'quantum-imaging' | 'quantum-computing';
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "De-QuIP: Quantum Mechanics-Inspired Denoising",
      description: "A novel framework for image restoration inspired by quantum mechanics concepts, focusing on efficient denoising algorithms for medical and scientific imaging applications.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Python", "NumPy", "SciPy", "Quantum Mechanics", "Image Processing"],
      githubLink: "https://github.com/SayantanDutta95/De-QuIP-Denoising",
      category: 'quantum-imaging'
    },
    {
      title: "Quantum Many-Body System Image Decomposition",
      description: "Framework for advanced image decomposition using quantum many-body interaction theory, enabling superior feature extraction and reconstruction capabilities.",
      image: "https://images.unsplash.com/photo-1635070036577-9705c6273f6f?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Python", "TensorFlow", "Quantum Physics", "Image Analysis"],
      category: 'quantum-imaging'
    },
    {
      title: "Quantum Circuit Noise Reduction",
      description: "Tools for identifying and reducing internal circuit noise in quantum processors, improving computational accuracy and reliability of quantum algorithms.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Qiskit", "Python", "Quantum Computing", "Signal Processing"],
      category: 'quantum-computing'
    },
    {
      title: "Adaptive Quantum State Thresholding",
      description: "Innovative techniques for adaptive thresholding of noisy quantum states, enhancing the fidelity of quantum information processing.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Python", "QuTiP", "Quantum Information", "Statistical Methods"],
      category: 'quantum-computing'
    }
  ];

  return (
    <section id="projects" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Research Projects</h2>
        
        {/* Quantum Mechanics Based Image Processing Section */}
        <div className="mt-12">
          <div className="flex items-center mb-6">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
              <Image className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold">Quantum Mechanics Based Image Processing</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects
              .filter(project => project.category === 'quantum-imaging')
              .map((project, index) => (
                <Card 
                  key={index}
                  className="bg-white overflow-hidden border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center"
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
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
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
                    
                    {project.liveLink && (
                      <Button 
                        size="sm" 
                        className="flex items-center gap-1 ml-2"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink size={16} /> Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
        
        {/* Quantum Computing Section */}
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
              <Atom className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold">Quantum Computing</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter(project => project.category === 'quantum-computing')
              .map((project, index) => (
                <Card 
                  key={index}
                  className="bg-white overflow-hidden border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center"
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
                          className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
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
                    
                    {project.liveLink && (
                      <Button 
                        size="sm" 
                        className="flex items-center gap-1 ml-2"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink size={16} /> Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
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
