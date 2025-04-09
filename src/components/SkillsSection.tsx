
import React from 'react';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Matlab", level: 95 },
        { name: "C", level: 50 },
        { name: "Fortran", level: 40 }
      ]
    },
    {
      name: "Machine Learning",
      skills: [
        { name: "PyTorch", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "Computer Vision", level: 90 },
        { name: "Qiskit", level: 60 }
      ]
    },
    {
      name: "Languages",
      skills: [
        { name: "Bengali", level: 100 },
        { name: "English", level: 95 },
        { name: "Hindi", level: 80 },
        { name: "French", level: 30 },
        { name: "Sanskrit", level: 20 }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-6 text-center">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">Additional Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Jupyter", "LaTeX", "Git", "Data Analysis", "Statistical Modeling"
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-secondary text-secondary-foreground py-2 px-4 rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
