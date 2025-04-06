
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="section-container flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
          Academic <span className="text-primary">Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center mb-8">
          Showcasing research, publications and technical skills in academic excellence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="px-6"
          >
            Get in Touch
          </Button>
          <Button 
            onClick={() => document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="outline"
            className="px-6"
          >
            View Publications
          </Button>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={30} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
