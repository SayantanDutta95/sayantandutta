
import React, { useState, useEffect } from 'react';
import { ExternalLink, BookOpen, Calendar, BookText, FileText, FileEdit, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
  tags: string[];
  type: 'journal' | 'conference' | 'preparation';
}

interface GoogleScholarMetrics {
  citations: number;
  hIndex: number;
  loading: boolean;
  error: boolean;
}

const PublicationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('journal');
  const [scholarMetrics, setScholarMetrics] = useState<GoogleScholarMetrics>({
    citations: 0,
    hIndex: 0,
    loading: true,
    error: false
  });
  
  // In a real implementation, this would fetch data from Google Scholar API
  // Since direct scraping isn't reliable or recommended, this would typically use a backend proxy
  useEffect(() => {
    // Simulating API fetch with sample data from the provided Google Scholar profile
    setTimeout(() => {
      setScholarMetrics({
        citations: 148,
        hIndex: 6,
        loading: false,
        error: false
      });
    }, 1000);
  }, []);
  
  const publications: Publication[] = [
    {
      title: "Transformer-based Models for Multi-lingual Text Classification",
      authors: "Sayantan Dutta, Colleague Name, Professor Name",
      journal: "Journal of Artificial Intelligence Research",
      year: "2023",
      link: "https://example.com/paper1",
      tags: ["NLP", "Transformers", "Classification"],
      type: "journal"
    },
    {
      title: "Deep Learning Approaches to Sentiment Analysis in Low-Resource Languages",
      authors: "Sayantan Dutta, Another Colleague",
      journal: "Computational Linguistics",
      year: "2022",
      link: "https://example.com/paper2",
      tags: ["Deep Learning", "Sentiment Analysis", "Low-Resource"],
      type: "journal"
    },
    {
      title: "Ethical Considerations in Developing Large Language Models",
      authors: "Sayantan Dutta, Collaborator Name",
      journal: "Conference on Natural Language Processing (ACL)",
      year: "2022",
      link: "https://example.com/paper3",
      tags: ["Ethics", "LLM", "AI Safety"],
      type: "conference"
    },
    {
      title: "Transfer Learning for Cross-Domain Natural Language Understanding",
      authors: "Sayantan Dutta, Colleague Name, Professor Name",
      journal: "Empirical Methods in Natural Language Processing (EMNLP)",
      year: "2021",
      link: "https://example.com/paper4",
      tags: ["Transfer Learning", "NLU", "Cross-Domain"],
      type: "conference"
    },
    {
      title: "Improving Knowledge Graph Representations with Contrastive Learning",
      authors: "Sayantan Dutta, Researcher Name",
      journal: "International Conference on Machine Learning (ICML)",
      year: "2021",
      link: "https://example.com/paper5",
      tags: ["Knowledge Graphs", "Contrastive Learning"],
      type: "conference"
    },
    {
      title: "Zero-shot Cross-lingual Information Retrieval using Large Language Models",
      authors: "Sayantan Dutta, Co-Author Name",
      journal: "Target: Transactions on Knowledge and Data Engineering",
      year: "2023",
      link: "#",
      tags: ["Zero-shot Learning", "Information Retrieval", "LLM"],
      type: "preparation"
    },
    {
      title: "Attention Mechanisms for Low-Resource Language Processing",
      authors: "Sayantan Dutta, Senior Researcher",
      journal: "Target: Computational Intelligence",
      year: "2023",
      link: "#",
      tags: ["Attention Mechanism", "Low-Resource Languages"],
      type: "preparation"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'journal': return <BookOpen size={20} />;
      case 'conference': return <FileText size={20} />;
      case 'preparation': return <FileEdit size={20} />;
      default: return <BookText size={20} />;
    }
  };

  const filteredPublications = publications.filter(pub => pub.type === activeTab);
  const journalCount = publications.filter(pub => pub.type === 'journal').length;
  const conferenceCount = publications.filter(pub => pub.type === 'conference').length;
  
  return (
    <section id="publications" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        
        <div className="mb-6 text-center">
          <p className="text-lg mb-2">
            Total: <span className="font-semibold">{journalCount}</span> Journal Papers and <span className="font-semibold">{conferenceCount}</span> Conference Papers
          </p>
          
          <div className="flex items-center justify-center gap-6 mt-4">
            {scholarMetrics.loading ? (
              <p>Loading Google Scholar metrics...</p>
            ) : scholarMetrics.error ? (
              <p>Failed to load citation metrics</p>
            ) : (
              <>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm">
                  <Quote size={18} className="text-primary" />
                  <span>Citations: <span className="font-bold">{scholarMetrics.citations}</span></span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm">
                  <Badge variant="outline" className="text-primary font-bold">h</Badge>
                  <span>h-index: <span className="font-bold">{scholarMetrics.hIndex}</span></span>
                </div>
              </>
            )}
          </div>
        </div>
        
        <Tabs 
          defaultValue="journal" 
          className="w-full mt-8"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md bg-white shadow-md">
              <TabsTrigger 
                value="journal" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <BookOpen size={16} />
                Journal Papers
              </TabsTrigger>
              <TabsTrigger 
                value="conference" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <FileText size={16} />
                Conference Papers
              </TabsTrigger>
              <TabsTrigger 
                value="preparation" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <FileEdit size={16} />
                In Preparation
              </TabsTrigger>
            </TabsList>
          </div>
          
          {['journal', 'conference', 'preparation'].map((type) => {
            const typePublications = publications.filter(pub => pub.type === type);
            
            return (
              <TabsContent key={type} value={type} className="space-y-8">
                {typePublications.map((pub, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow relative"
                  >
                    <div className="absolute -left-4 -top-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-md">
                      {typePublications.length - index}
                    </div>
                    
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
                        {getIcon(pub.type)}
                        <span className="ml-2">{pub.journal}</span>
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
                      disabled={pub.type === 'preparation'}
                    >
                      {pub.type === 'preparation' ? 'Coming Soon' : 'Read Paper'} 
                      {pub.type !== 'preparation' && <ExternalLink size={16} className="ml-2" />}
                    </Button>
                  </div>
                ))}
              </TabsContent>
            );
          })}
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button 
            onClick={() => window.open("https://scholar.google.com/citations?user=S3LTYwEAAAAJ&hl=en", "_blank")}
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
