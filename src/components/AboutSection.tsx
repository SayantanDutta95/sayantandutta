
import React from 'react';
import { GraduationCap, BookOpen, ExternalLink } from 'lucide-react';

const AboutSection: React.FC = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Université Toulouse III - Paul Sabatier",
      year: "Oct 2019 - Jan 2023",
      description: "Thesis: Novel prospects of image restorations inspired by concepts of quantum mechanics",
      location: "Toulouse, France",
      additionalInfo: "Supervisors: Prof. Adrian Basarab and Prof. Denis Kouamé (from Computer Science department), and Prof. Bertrand Georgeot (from Physics department)",
      link: "https://theses.hal.science/tel-04047862/"
    },
    {
      degree: "Master in Fundamental Physics",
      institution: "Université de Tours",
      year: "Sep 2018 - Jul 2019",
      description: "Master's Thesis: Classical signal and image processing methods inspired from quantum mechanics",
      location: "Tours, France",
      additionalInfo: "Grade: 16.92/20, Rank: Second"
    },
    {
      degree: "Master in Applied Mathematics",
      institution: "Visva-Bharati University",
      year: "Jul 2016 - May 2018",
      description: "Master's Thesis: Electromagnetic solitary waves in a relativistic pair plasma",
      location: "Bolpur, India",
      additionalInfo: "Grade: 9.27/10, Rank: Second"
    },
    {
      degree: "Bachelor in Mathematics",
      institution: "The University of Burdwan",
      year: "Jul 2013 - Jun 2016",
      location: "Burdwan, India",
      description: ""
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I am Sayantan Dutta, a researcher with a multidisciplinary background in mathematics, physics, and computer science. Currently, I am working as a Senior AI Scientist at GE Healthcare. Previously, I worked as a Postdoctoral Associate at Weill Cornell Medicine, Cornell University, New York, USA. I received my Ph.D. from the Université Paul Sabatier - Toulouse III, France.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            My research interests span computed tomography imaging, quantitative acoustic microscopy, quantum computing, quantum image processing, deep learning, and inverse problems. I have published extensively in prestigious journals and conferences, developed novel image restoration and medical imaging methods inspired by quantum mechanics, and collaborated with leading researchers and institutions. I am passionate about advancing computational imaging and signal processing through innovative approaches.
          </p>
          <div className="flex items-center justify-center mt-6 mb-4">
            <a 
              href="https://orcid.org/0000-0002-8187-4193" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors"
            >
              <img 
                src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" 
                alt="ORCID logo" 
                className="w-4 h-4 mr-2" 
              />
              ORCID: 0000-0002-8187-4193
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-serif font-bold mb-6">Academic Background</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold">{edu.degree}</h3>
              </div>
              <div className="mb-4">
                <p className="text-primary font-medium">{edu.institution}</p>
                <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground mt-1">
                  <span>{edu.year}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
              
              {edu.description && (
                <div className="mb-4">
                  <p className="text-gray-700">{edu.description}</p>
                  {edu.link && (
                    <a 
                      href={edu.link}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary text-sm hover:underline inline-block mt-1"
                    >
                      (arXiv)
                    </a>
                  )}
                </div>
              )}
              
              {edu.additionalInfo && (
                <p className="text-sm text-gray-500 italic">{edu.additionalInfo}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold mb-6">Research Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Quantum Computing</h4>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Signal representation in quantum computers</li>
                    <li>Internal circuit noise removal in quantum processors</li>
                    <li>Adaptive thresholding of noisy quantum states</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Quantum Image Processing</h4>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Adaptive transformations based on quantum mechanics</li>
                    <li>Image decomposition using quantum many-body interaction theory</li>
                    <li>Image formation and reconstruction techniques</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Deep Learning</h4>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Physics-inspired neural networks for inverse problems</li>
                    <li>Image restoration using deep learning models</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Quantitative Ultrasound</h4>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Acoustical and mechanical properties of soft tissues at microscopic resolution</li>
                    <li>Tissue characterization using quantitative acoustic microscopy</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Computed Tomography Imaging</h4>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Advanced techniques for reconstruction and restoration in computed tomography imaging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
