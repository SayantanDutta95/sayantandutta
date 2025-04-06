
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
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "NLP Research Framework",
      description: "An extensible framework for natural language processing research, supporting various transformer architectures and datasets.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Python", "PyTorch", "Transformers", "Docker"],
      githubLink: "https://github.com/username/nlp-research-framework",
      liveLink: "https://example.com/demo"
    },
    {
      title: "Scientific Paper Analyzer",
      description: "A tool that uses machine learning to analyze and extract insights from scientific papers across multiple domains.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Python", "TensorFlow", "NLP", "React"],
      githubLink: "https://github.com/username/scientific-paper-analyzer"
    },
    {
      title: "Multilingual Sentiment Analysis",
      description: "Implementation of sentiment analysis models that work across 50+ languages with high accuracy.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Python", "Scikit-learn", "FastAPI", "Vue.js"],
      githubLink: "https://github.com/username/multilingual-sentiment",
      liveLink: "https://example.com/sentiment-demo"
    }
  ];

  return (
    <section id="projects" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Research Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-50 text-blue-700 text-xs py-1 px-2 rounded-md"
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
                      <ExternalLink size={16} /> Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open("https://github.com/username", "_blank")}
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
