
import React, { useState } from 'react';
import { ExternalLink, BookOpen, FileText, FileEdit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { publications } from '@/data/publications';
import { journalPublications } from '@/data/publications/journal';
import { conferencePublications } from '@/data/publications/conference';
import { preparationPublications } from '@/data/publications/preparation';
import GoogleScholarMetrics from './publications/GoogleScholarMetrics';
import PublicationsTabContent from './publications/PublicationsTabContent';

const PublicationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('journal');
  
  const journalCount = journalPublications.length;
  const conferenceCount = conferencePublications.length;
  
  return (
    <section id="publications" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        
        <div className="mb-8 text-center">
          <p className="text-lg mb-4">
            Total: <span className="font-semibold">{journalCount}</span> Journal Papers and <span className="font-semibold">{conferenceCount}</span> Conference Papers
          </p>
          
          <div className="mt-6">
            <GoogleScholarMetrics />
          </div>
        </div>
        
        <Tabs 
          defaultValue="journal" 
          className="w-full mt-10"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl bg-blue-100 shadow-md border-2 border-blue-200 gap-2">
              <TabsTrigger 
                value="journal" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-medium px-4 py-2"
              >
                <BookOpen size={16} />
                Journal Papers
              </TabsTrigger>
              <TabsTrigger 
                value="conference" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-medium px-4 py-2"
              >
                <FileText size={16} />
                Conference Papers
              </TabsTrigger>
              <TabsTrigger 
                value="preparation" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white font-medium px-4 py-2"
              >
                <FileEdit size={16} />
                In Preparation
              </TabsTrigger>
            </TabsList>
          </div>
          
          <PublicationsTabContent type="journal" publications={journalPublications} />
          <PublicationsTabContent type="conference" publications={conferencePublications} />
          <PublicationsTabContent type="preparation" publications={preparationPublications} />
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
