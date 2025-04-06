
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
      name: "Deep Learning Specialization",
      issuer: "Coursera (deeplearning.ai)",
      date: "March 2022",
      credentialId: "DLSP-123456",
      credentialLink: "https://example.com/credential/123456",
      skills: ["Neural Networks", "CNN", "RNN", "Transformers", "TensorFlow"]
    },
    {
      name: "Advanced NLP with TensorFlow",
      issuer: "Udacity",
      date: "November 2021",
      credentialId: "ANLP-789012",
      credentialLink: "https://example.com/credential/789012",
      skills: ["TensorFlow", "BERT", "Transfer Learning", "NLP", "Text Classification"]
    },
    {
      name: "Machine Learning Engineering for Production",
      issuer: "Coursera (deeplearning.ai)",
      date: "June 2021",
      credentialId: "MLEP-345678",
      credentialLink: "https://example.com/credential/345678",
      skills: ["MLOps", "Model Deployment", "Data Pipeline", "TFX", "Kubernetes"]
    },
    {
      name: "Ethics in AI",
      issuer: "edX (Harvard University)",
      date: "February 2021",
      skills: ["AI Ethics", "Fairness", "Transparency", "Responsible AI"]
    },
    {
      name: "Cloud Computing for Machine Learning",
      issuer: "Google Cloud Training",
      date: "September 2020",
      credentialId: "CCML-901234",
      credentialLink: "https://example.com/credential/901234",
      skills: ["GCP", "Cloud ML", "Kubernetes", "Docker", "Vertex AI"]
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
