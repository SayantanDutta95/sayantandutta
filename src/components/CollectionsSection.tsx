
import React from 'react';
import { Book, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Collection {
  title: string;
  publisher: string;
  year: string;
  role: string;
  status: "Published" | "In Progress" | "Planned";
  link?: string;
}

const CollectionsSection: React.FC = () => {
  const collections: Collection[] = [
    {
      title: "Advances in Natural Language Processing: Methods and Applications",
      publisher: "Academic Press",
      year: "2023",
      role: "Editor-in-Chief",
      status: "Published",
      link: "https://example.com/book1"
    },
    {
      title: "Computational Linguistics and Machine Learning: Volume II",
      publisher: "Springer",
      year: "2022",
      role: "Co-Editor",
      status: "Published",
      link: "https://example.com/book2"
    },
    {
      title: "Ethics in Artificial Intelligence and Large Language Models",
      publisher: "Oxford University Press",
      year: "2024",
      role: "Lead Editor",
      status: "In Progress"
    },
    {
      title: "Multilingual AI: Challenges and Opportunities",
      publisher: "Cambridge University Press",
      year: "2025",
      role: "Editor",
      status: "Planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Planned": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="collections" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Collections</h2>
        
        <div className="mt-12 overflow-hidden rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Publisher</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {collections.map((collection, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {collection.link ? (
                      <a 
                        href={collection.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <Book size={16} className="mr-2" />
                        {collection.title}
                      </a>
                    ) : (
                      <div className="flex items-center">
                        <Book size={16} className="mr-2" />
                        {collection.title}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{collection.publisher}</TableCell>
                  <TableCell className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {collection.year}
                  </TableCell>
                  <TableCell>{collection.role}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(collection.status)}`}>
                      {collection.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
