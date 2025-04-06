
import React from 'react';
import { Users, Calendar, Building } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Collaboration {
  institution: string;
  department: string;
  location: string;
  period: string;
  project: string;
  status: "Active" | "Completed" | "Planned";
}

const CollaborationsSection: React.FC = () => {
  const collaborations: Collaboration[] = [
    {
      institution: "Stanford University",
      department: "Computer Science Department",
      location: "California, USA",
      period: "2022 - Present",
      project: "Deep Learning for NLP Applications",
      status: "Active"
    },
    {
      institution: "Max Planck Institute",
      department: "Intelligent Systems",
      location: "Tübingen, Germany",
      period: "2021 - 2023",
      project: "Multilingual Large Language Models",
      status: "Completed"
    },
    {
      institution: "University of Tokyo",
      department: "AI Research Center",
      location: "Tokyo, Japan",
      period: "2020 - 2021",
      project: "Cross-lingual Knowledge Transfer",
      status: "Completed"
    },
    {
      institution: "ETH Zürich",
      department: "Computer Vision Lab",
      location: "Zürich, Switzerland",
      period: "2023 - 2025",
      project: "Multimodal AI Systems",
      status: "Planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      case "Planned": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="collaborations" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Collaborations</h2>
        
        <div className="mt-12 overflow-hidden rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Institution</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {collaborations.map((collab, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Building size={16} className="mr-2" />
                      {collab.institution}
                    </div>
                  </TableCell>
                  <TableCell>{collab.department}</TableCell>
                  <TableCell>{collab.location}</TableCell>
                  <TableCell className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {collab.period}
                  </TableCell>
                  <TableCell>{collab.project}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(collab.status)}`}>
                      {collab.status}
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

export default CollaborationsSection;
