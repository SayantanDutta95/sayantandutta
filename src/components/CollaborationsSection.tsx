
import React from 'react';
import { Users, Calendar, Building, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Collaboration {
  institution: string;
  department: string;
  location: string;
  period: string;
  project: string;
  status: "Active" | "Completed" | "Planned";
  collaborator: string;
}

const CollaborationsSection: React.FC = () => {
  const collaborations: Collaboration[] = [
    {
      institution: "Weill Cornell University",
      department: "Department of Radiology, Weill Cornell Medicine",
      location: "New York, NY, USA",
      period: "2023 - Present",
      project: "Quantitative Acoustics Microscopy",
      status: "Active",
      collaborator: "Dr. Jonathan Mamou"
    },
    {
      institution: "Harvard University",
      department: "Department of Radiology, Harvard Medical School",
      location: "Boston, MA, USA",
      period: "2024 - Present",
      project: "Quantum-Inspired Image Restoration",
      status: "Active",
      collaborator: "Prof. Hamid Sabet"
    },
    {
      institution: "The University of Newcastle",
      department: "Department of Vision Sciences",
      location: "Callaghan, NSW, Australia",
      period: "2023 - Present",
      project: "Microstructural Changes due to Myopia",
      status: "Active",
      collaborator: "Prof. Sally McFadden"
    },
    {
      institution: "National University of Singapore",
      department: "Department of Ophthalmology",
      location: "Singapore",
      period: "2023 - Present",
      project: "Microstructural Changes due to Myopia",
      status: "Active",
      collaborator: "Dr. Quan V. Hoang"
    },
    {
      institution: "Columbia University",
      department: "Department of Ophthalmology",
      location: "New York, NY, USA",
      period: "2023 - 2024",
      project: "Acoustic Properties in Optical Tissue",
      status: "Completed",
      collaborator: "Prof. Ronald H. Silverman"
    },
    {
      institution: "Université de Lyon",
      department: "Biomedical Imaging Research Lab - CREATIS",
      location: "Lyon, France",
      period: "2019 - 2024",
      project: "Quantum Inspired Image Processing",
      status: "Completed",
      collaborator: "Prof. Adrian Basarab"
    },
    {
      institution: "Université de Lyon",
      department: "Biomedical Imaging Research Lab - CREATIS",
      location: "Lyon, France",
      period: "2022 - 2023",
      project: "Enhancement of Cardiac Ultrasound Images",
      status: "Completed",
      collaborator: "Prof. Damien Garcia"
    },
    {
      institution: "Université Paul Sabatier - Toulouse III",
      department: "IRIT: Institut de Recherche en Informatique de Toulouse",
      location: "Toulouse, France",
      period: "2019 - Present",
      project: "Quantum Image Processing",
      status: "Active",
      collaborator: "Prof. Denis Kouamé"
    },
    {
      institution: "Université Paul Sabatier - Toulouse III",
      department: "LPT: Laboratoire de Physique Théorique",
      location: "Toulouse, France",
      period: "2019 - Present",
      project: "Quantum Image Processing",
      status: "Active",
      collaborator: "Dr. Bertrand Georgeot"
    },
    {
      institution: "Université Paul Sabatier - Toulouse III",
      department: "IRIT: Institut de Recherche en Informatique de Toulouse",
      location: "Toulouse, France",
      period: "2022 - 2024",
      project: "Dental Tomography Image Super-Resolution",
      status: "Completed",
      collaborator: "Dr. Duong Hung Pham"
    },
    {
      institution: "Visva-Bharati University",
      department: "Department of Mathematics",
      location: "Santiniketan, WB, India",
      period: "2018 - 2020",
      project: "Relativistic Magnetized Plasma",
      status: "Completed",
      collaborator: "Prof. Amar P. Misra"
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
                <TableHead>Collaborator</TableHead>
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
                  <TableCell className="flex items-center">
                    <User size={16} className="mr-2" />
                    {collab.collaborator}
                  </TableCell>
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
