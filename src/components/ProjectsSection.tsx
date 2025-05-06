import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  demoLink?: string; 
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Quantum Mechanics Based Image Processing",
      description: "A pioneering framework in image restoration inspired by quantum mechanics principles, focusing on efficient decomposition algorithms tailored for medical and scientific imaging applications. This approach enables superior feature extraction and reconstruction capabilities.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["MATLAB", "Quantum Mechanics", "Image Processing", "Quantum Interaction", "Adaptive Decomposition"],
      githubLink: "https://github.com/SayantanDutta95/De-QuIP-Denoising",
      liveLink: "https://github.com/SayantanDutta95/presentation_posters/blob/main/flow_DeQuIP.pdf"
    },
    {
      title: "Quantum Computing for Imaging",
      description: "Innovating tools designed to identify and mitigate internal circuit noise within quantum processors, enhancing computational accuracy and reliability of quantum algorithms for imaging. This project introduces novel techniques for adaptive thresholding of noisy quantum states, thereby improving signal fidelity in quantum information processing.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Qiskit", "Quantum Information", "Quantum Computing", "Quantum Decoherence", "Quantum Noise", "Quantum Signal", "Grover's Algorithm", "MATLAB"],
      githubLink: "https://github.com/username/scientific-paper-analyzer"
    },
    {
      title: "Quantitative Microscopy Ultrasound",
      description: "Advancing research in quantitative acoustic microscopy to extract acoustical and mechanical properties of soft tissues at microscopic scales. This project combines regularization by denoising (RED) with the alternating direction method of multipliers (ADMM) for high-resolution 3D radio-frequency ultrasound microscopy image enhancement, facilitating enhanced tissue characterization.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Python", "MATLAB", "Optimization", "Ultrasound Imaging", "Tissue Analysis", "Acoustic Microscopy", "3D Radio Frequency Signal"],
      githubLink: "https://github.com/SayantanDutta95/RED-ADMM-De-QuIP",
      liveLink: "https://github.com/SayantanDutta95/presentation_posters/blob/main/QAM_flow.PNG"
    },
    {
      title: "Medical Imaging",
      description: "Pushing the boundaries in medical imaging with advanced techniques aimed at enhancing cardiac ultrasound images for improved diagnostic capabilities. This research also explores innovative methods for reconstruction and restoration in computed tomography (CT) imaging, contributing to enhanced medical diagnostics.",
      image: "https://github.com/SayantanDutta95/presentation_posters/blob/main/medical_mri.png",
      technologies: ["Python", "MATLAB", "Deep Learning", "3D Enhancement", "Ultrasound Imaging", "Tissue Analysis", "Motion in Medical Image", "CT Reconstruction", "Medical Diagnostics"],
      githubLink: "https://github.com/SayantanDutta95/Cardiac-USimage-Enhancement",
      demoLink: "https://github.com/SayantanDutta95/Cardiac-USimage-Enhancement/blob/main/Restored_Cardiac_images/patient02_movie.gif"
    }
  ];

  return (
    <section id="projects" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Research Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-50 text-blue-700 text-xs py-1 px-2 rounded-md hover:bg-blue-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={16} /> GitHub
                  </Button>
                  
                  {project.liveLink && (
                    <Button 
                      size="sm" 
                      className="flex items-center gap-1"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink size={16} /> View Poster
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
                </div>
              </div>
            </div>
          ))}
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
