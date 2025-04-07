
import React, { useState } from 'react';
import { ExternalLink, BookOpen, FileText, FileEdit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { publications } from '@/data/publications';
import GoogleScholarMetrics from './publications/GoogleScholarMetrics';
import PublicationsTabContent from './publications/PublicationsTabContent';

const PublicationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('journal');
  
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
          
          <div className="mt-4">
            <GoogleScholarMetrics />
          </div>
        </div>
        
        <Tabs 
          defaultValue="journal" 
          className="w-full mt-8"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md bg-blue-100 shadow-md border-2 border-blue-200">
              <TabsTrigger 
                value="journal" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-medium"
              >
                <BookOpen size={16} />
                Journal Papers
              </TabsTrigger>
              <TabsTrigger 
                value="conference" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-medium"
              >
                <FileText size={16} />
                Conference Papers
              </TabsTrigger>
              <TabsTrigger 
                value="preparation" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-medium"
              >
                <FileEdit size={16} />
                In Preparation
              </TabsTrigger>
            </TabsList>
          </div>
          
          <PublicationsTabContent type="journal" publications={publications} />
          <PublicationsTabContent type="conference" publications={publications} />
          <PublicationsTabContent type="preparation" publications={publications} />
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
