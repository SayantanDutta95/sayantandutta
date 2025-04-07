
import React from 'react';
import { ExternalLink, Calendar, BookOpen, FileText, FileEdit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Publication } from '@/types/publication';

interface PublicationCardProps {
  publication: Publication;
  index: number;
  totalCount: number;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ 
  publication, 
  index,
  totalCount 
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'journal': return <BookOpen size={20} />;
      case 'conference': return <FileText size={20} />;
      case 'preparation': return <FileEdit size={20} />;
      default: return <BookOpen size={20} />;
    }
  };

  // Calculate reverse index (totalCount - index)
  const reverseIndex = totalCount - index;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow relative">
      <div className="absolute -left-4 -top-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-md">
        {reverseIndex}
      </div>
      
      <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">
        {publication.title}
      </h3>
      <p className="text-muted-foreground mb-3">
        {publication.authors}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {publication.tags.map((tag, i) => (
          <Badge key={i} variant="secondary">{tag}</Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center mb-4 text-sm text-muted-foreground gap-4">
        <div className="flex items-center">
          {getIcon(publication.type)}
          <span className="ml-2">{publication.journal}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={16} className="mr-2" />
          {publication.year}
        </div>
      </div>
      <Button 
        variant="outline" 
        size="sm"
        className="flex items-center"
        onClick={() => window.open(publication.link, '_blank')}
        disabled={publication.type === 'preparation'}
      >
        {publication.type === 'preparation' ? 'Coming Soon' : 'Read Paper'} 
        {publication.type !== 'preparation' && <ExternalLink size={16} className="ml-2" />}
      </Button>
    </div>
  );
};

export default PublicationCard;
