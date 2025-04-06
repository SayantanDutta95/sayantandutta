
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
      name: "International Conference on Artificial Intelligence",
      role: "Program Chair",
      date: "June 15-18, 2023",
      location: "Toronto, Canada",
      description: "Organized the 15th annual conference with 1,200+ attendees, 300 paper submissions, and 25 invited speakers.",
      attendees: "1,200+",
      type: "Conference"
    },
    {
      name: "Workshop on Ethics in NLP",
      role: "Lead Organizer",
      date: "March 8-9, 2023",
      location: "Virtual",
      description: "Coordinated a two-day workshop focusing on ethical considerations in natural language processing applications.",
      attendees: "350",
      type: "Workshop"
    },
    {
      name: "Summer Symposium on Machine Learning",
      role: "Organizing Committee Member",
      date: "August 20-22, 2022",
      location: "Barcelona, Spain",
      description: "Helped organize a symposium bringing together leading researchers in machine learning and deep neural networks.",
      attendees: "500",
      type: "Symposium"
    },
    {
      name: "Research Seminar Series on Language Models",
      role: "Coordinator",
      date: "January - May 2022",
      location: "University of Technology",
      description: "Organized a weekly seminar series featuring speakers from academia and industry on advances in language models.",
      attendees: "120 per session",
      type: "Seminar"
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
