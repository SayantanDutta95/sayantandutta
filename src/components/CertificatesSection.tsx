
import React from 'react';
import { Award, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialLink?: string;
  skills: string[];
}

const CertificatesSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      name: "Introduction to Artificial Intelligence with Python",
      issuer: "Artificial and Natural Intelligence Toulouse Institute (ANITI), Federal University of Toulouse, France",
      date: "March - May 2021",
      credentialLink: "https://en.univ-toulouse.fr/node/2377",
      skills: ["Neural Networks", "Data Pipeline", "CNN", "RNN", "NLP", "PyTorch", "TensorFlow", "AI Ethics"]
    },
    {
      name: "Recent Developments in Quantum Mechanics",
      issuer: "Université Paul Sabatier, Toulouse III, Toulouse, France",
      date: "March - June 2022",
      credentialLink: "https://ed-sdm.univ-toulouse.fr/as/ed/page.pl?site=edsdm&page=presentation",
      skills: ["Quantum Computing", "Quantum Circuits Design", "Quantum Cryptography"]
    },
    {
      name: "The Statistics of Cosmological Perturbations",
      issuer: "Institute of Space Astrophysics (IAS), Université Paris-Saclay, Paris, France",
      date: "May 2021",
      credentialLink: "https://www.ias.u-psud.fr/fr/formation/enseignements/doctorat/formation-doctorale",
      skills: ["Cosmological Perturbations", "ΛCDM Model", "Dark Energy and Dark Matter", "Galaxy Formation"]
    },
    {
      name: "Ethics and Scientific Integrity",
      issuer: "Université Paul Sabatier, Toulouse III, Toulouse, France",
      date: "February 2021",
      credentialLink: "https://adum.fr/as/ed/edmitt/page.pl?page=contact",
      skills: ["Research Integrity", "Ethical Research"]
    }
  ];

  return (
    <section id="certificates" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Certificate Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <CardTitle className="text-lg font-serif">{cert.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <p className="font-medium">{cert.issuer}</p>
                  <p className="text-muted-foreground flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {cert.credentialLink && (
                  <div className="pt-2">
                    <a 
                      href={cert.credentialLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      <CheckCircle2 size={14} className="mr-1" />
                      Verify Credential {cert.credentialId && `(${cert.credentialId})`}
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
