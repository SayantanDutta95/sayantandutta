
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Event {
  name: string;
  role: string;
  date: string;
  location: string;
  description: string;
  attendees: string;
  type: "Conference" | "Workshop" | "Symposium" | "Seminar";
}

const OrganizedEventsSection: React.FC = () => {
  const events: Event[] = [
    {
      name: "European Signal Processing Conference (EUSIPCO)",
      role: "Co-organizer",
      date: "September 4-8, 2023",
      location: "Helsinki, Finland",
      description: "Co-organized special session on \"Plug-and-Play Algorithms for Computational Imaging: Theory and Applications\"",
      attendees: "1,000+",
      type: "Conference"
    }   
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Conference": return "bg-violet-100 text-violet-800";
      case "Workshop": return "bg-green-100 text-green-800";
      case "Symposium": return "bg-amber-100 text-amber-800";
      case "Seminar": return "bg-sky-100 text-sky-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="organized-events" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Organized Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="font-serif text-lg">{event.name}</CardTitle>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                <p className="text-muted-foreground mt-1">{event.role}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2 mb-4 text-sm">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-muted-foreground" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizedEventsSection;
