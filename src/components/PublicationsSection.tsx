
import React from 'react';
import { ExternalLink, BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
  tags: string[];
}

const PublicationsSection: React.FC = () => {
  const publications: Publication[] = [
    {
      title: "Transformer-based Models for Multi-lingual Text Classification",
      authors: "Your Name, Colleague Name, Professor Name",
      journal: "Conference on Natural Language Processing (ACL)",
      year: "2023",
      link: "https://example.com/paper1",
      tags: ["NLP", "Transformers", "Classification"]
    },
    {
      title: "Deep Learning Approaches to Sentiment Analysis in Low-Resource Languages",
      authors: "Your Name, Another Colleague",
      journal: "Journal of Artificial Intelligence Research",
      year: "2022",
      link: "https://example.com/paper2",
      tags: ["Deep Learning", "Sentiment Analysis", "Low-Resource"]
    },
    {
      title: "Ethical Considerations in Developing Large Language Models",
      authors: "Your Name, Collaborator Name",
      journal: "Ethics in AI Conference",
      year: "2022",
      link: "https://example.com/paper3",
      tags: ["Ethics", "LLM", "AI Safety"]
    },
    {
      title: "Transfer Learning for Cross-Domain Natural Language Understanding",
      authors: "Your Name, Colleague Name, Professor Name",
      journal: "Empirical Methods in Natural Language Processing (EMNLP)",
      year: "2021",
      link: "https://example.com/paper4",
      tags: ["Transfer Learning", "NLU", "Cross-Domain"]
    },
    {
      title: "Improving Knowledge Graph Representations with Contrastive Learning",
      authors: "Your Name, Researcher Name",
      journal: "International Conference on Machine Learning (ICML)",
      year: "2021",
      link: "https://example.com/paper5",
      tags: ["Knowledge Graphs", "Contrastive Learning"]
    }
  ];

  return (
    <section id="publications" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        
        <div className="space-y-8 mt-12">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">
                {pub.title}
              </h3>
              <p className="text-muted-foreground mb-3">
                {pub.authors}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {pub.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap items-center mb-4 text-sm text-muted-foreground gap-4">
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  {pub.journal}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {pub.year}
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center"
                onClick={() => window.open(pub.link, '_blank')}
              >
                Read Paper <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            onClick={() => window.open("https://scholar.google.com", "_blank")}
            variant="secondary"
            className="flex items-center gap-2"
          >
            View All on Google Scholar <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
