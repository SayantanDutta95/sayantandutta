
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import PublicationCard from './PublicationCard';
import { Publication } from '@/types/publication';

interface PublicationsTabContentProps {
  type: 'journal' | 'conference' | 'preparation';
  publications: Publication[];
}

const PublicationsTabContent: React.FC<PublicationsTabContentProps> = ({ 
  type, 
  publications 
}) => {
  const filteredPublications = publications.filter(pub => pub.type === type);
  
  return (
    <TabsContent value={type} className="space-y-8">
      {filteredPublications.map((pub, index) => (
        <PublicationCard 
          key={index} 
          publication={pub} 
          index={index} 
          totalCount={filteredPublications.length}
        />
      ))}
    </TabsContent>
  );
};

export default PublicationsTabContent;
