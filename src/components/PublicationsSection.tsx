
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { publications } from '@/data/publications';
import GoogleScholarMetrics from './publications/GoogleScholarMetrics';
import PublicationsTabContent from './publications/PublicationsTabContent';

const PublicationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('journal');
  
  const journalCount = publications.filter(pub => pub.type === 'journal').length;
  const conferenceCount = publications.filter(pub => pub.type === 'conference').length;
  const preparationCount = publications.filter(pub => pub.type === 'preparation').length;
  
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
            <TabsList className="grid grid-cols-3 w-full max-w-md bg-white shadow-md rounded-lg border border-gray-200">
              <TabsTrigger 
                value="journal" 
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold font-medium transition-all duration-200 py-3"
              >
                Journal Papers ({journalCount})
              </TabsTrigger>
              <TabsTrigger 
                value="conference" 
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold font-medium transition-all duration-200 py-3"
              >
                Conference ({conferenceCount})
              </TabsTrigger>
              <TabsTrigger 
                value="preparation" 
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-primary data-[state=active]:font-semibold font-medium transition-all duration-200 py-3"
              >
                In Prep ({preparationCount})
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
