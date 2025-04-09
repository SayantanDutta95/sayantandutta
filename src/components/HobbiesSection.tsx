
import React from 'react';
import { Trophy, Mountain, Palette } from 'lucide-react';

interface HobbyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HobbiesSection: React.FC = () => {
  const hobbies: HobbyItem[] = [
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Sports Enthusiast",
      description: "Active player in cricket, football, badminton, and chess, developing teamwork, strategic thinking, and competitive spirit."
    },
    {
      icon: <Mountain className="h-10 w-10 text-primary" />,
      title: "Outdoor Explorer",
      description: "Regular hiking adventures exploring new places and experiencing diverse cultures and landscapes."
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Creative Expression",
      description: "Cultivate artistic skills through painting and music, enhancing creative problem-solving abilities."
    }
  ];

  return (
    <section id="hobbies" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Hobbies & Interests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="mb-4">
                {hobby.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">
                {hobby.title}
              </h3>
              <p className="text-muted-foreground">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
