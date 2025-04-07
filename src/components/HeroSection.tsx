
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="section-container flex flex-col items-center justify-center z-10">
        <div className="mb-8">
          <Avatar className="h-40 w-40 border-4 border-white shadow-lg">
            <AvatarImage src="/250009500_SayantanDutta_11-06-2024_09_15_33.jpg" alt="Sayantan Dutta" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center">
          Sayantan Dutta
        </h1>
        
        <p className="text-lg md:text-xl text-primary font-medium mb-6 text-center">
          Senior Scientist & Researcher
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center mb-8">
          Specializing in Quantum Algorithms for Image Processing, Signal Denoising, and Medical Imaging
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
