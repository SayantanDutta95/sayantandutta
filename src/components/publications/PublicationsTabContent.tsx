
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
  // Filter publications by type
  const filteredPublications = publications.filter(pub => pub.type === type);
  
  const getHeading = () => {
    switch(type) {
      case 'journal': return 'Journal Publications';
      case 'conference': return 'Conference Publications';
      case 'preparation': return 'Publications in Preparation';
      default: return '';
    }
  };
  
  return (
    <TabsContent value={type} className="space-y-8 animate-in fade-in-50 duration-300">
      <div className="text-center mb-8">
        <h3 className="text-xl font-serif font-semibold text-gray-800">{getHeading()}</h3>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>
      
      {filteredPublications.map((pub, index) => (
        <PublicationCard 
          key={index} 
          publication={pub} 
          index={index} 
          totalCount={filteredPublications.length}
        />
      ))}
      
      {filteredPublications.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No publications available in this category yet.
        </div>
      )}
    </TabsContent>
  );
};

export default PublicationsTabContent;
