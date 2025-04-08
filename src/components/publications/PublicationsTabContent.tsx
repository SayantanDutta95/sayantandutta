
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
  // Since we're now passing in the pre-filtered publications directly,
  // we don't need to filter them again
  return (
    <TabsContent value={type} className="space-y-8">
      {publications.map((pub, index) => (
        <PublicationCard 
          key={index} 
          publication={pub} 
          index={index} 
          totalCount={publications.length}
        />
      ))}
    </TabsContent>
  );
};

export default PublicationsTabContent;
