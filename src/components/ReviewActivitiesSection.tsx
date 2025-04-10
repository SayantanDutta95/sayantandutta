
import React, { useState } from 'react';
import { Search, CheckCircle, BookOpen, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface JournalReview {
  journal: string;
  role: string;
  year: string;
  papersReviewed: number;
  topics?: string[];
}

interface ConferenceReview {
  conference: string;
  role: string;
  year: string;
  papersReviewed: number;
  specialTracks?: string[];
}

const ReviewActivitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('journals');

  const journalReviews: JournalReview[] = [
    {
      journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
      role: "Reviewer",
      year: "2024, 2025",
      papersReviewed: 3,
      topics: ["Deep Learning", "Transformer"]
    },
    {
      journal: "IEEE Transactions on Computational Imaging",
      role: "Reviewer",
      year: "2024",
      papersReviewed: 3,
      topics: ["Unrolled Architecture", "CT Reconstruction"]
    },
    {
      journal: "IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control",
      role: "Reviewer",
      year: "2022, 2023",
      papersReviewed: 2,
      topics: ["Segmentation", "Quantum Evolution", "Deep Content-Aware Prior"]
    },
    {
      journal: "IEEE Transactions on Geoscience and Remote Sensing",
      role: "Reviewer",
      year: "2022, 2024",
      papersReviewed: 6,
      topics: ["Seismic Signals", "Quantum-Based Signal Representation"]
    },
    {
      journal: "IEEE Signal Processing Letters",
      role: "Reviewer",
      year: "2023",
      papersReviewed: 1,
      topics: ["Sparse Reconstruction", "Time-Varying Neurodynamic", "Optimization"]
    },
    {
      journal: "IEEE Access",
      role: "Reviewer",
      year: "2021, 2024",
      papersReviewed: 5,
      topics: ["Attention Mechanism", "Cancer Detection", "Hybrid Framework", "Quantum Denoising", "Quantum Processing for Biomedical Images"]
    },
    {
      journal: "Signal Processing",
      role: "Reviewer",
      year: "2023, 2024",
      papersReviewed: 5,
      topics: ["Inverse Problems", "Transformer", "CNN"]
    },
    {
      journal: "Digital Signal Processing",
      role: "Reviewer",
      year: "2024, 2025",
      papersReviewed: 6,
      topics: ["Unsupervised Model", "Residual Network", "Classification", "Time-Signal Data"]
    },
    {
      journal: "Quantum Machine Intelligence",
      role: "Reviewer",
      year: "2024",
      papersReviewed: 1,
      topics: ["Hybrid Classical-Quantum Computing"]
    },
    {
      journal: "Physics of Plasmas",
      role: "Reviewer",
      year: "2023",
      papersReviewed: 2,
      topics: ["Plasma Dynamic", "Pair Plasma"]
    },
    {
      journal: "Geophysical Journal International",
      role: "Reviewer",
      year: "2022",
      papersReviewed: 2,
      topics: ["Seismic Energy Absorption", "Hydrocarbon Detection"]
    },
    {
      journal: "MDPI Journals",
      role: "Reviewer",
      year: "2023, 2024, 2025",
      papersReviewed: 21,
      topics: ["Journal of Marine Science and Engineering", "Entropy", "Sensors", "Fractal and Fractional",
      "Applied System Innovation", "Applied Sciences", "Electronics", "Remote Sensing", "Symmetry"]
    }
  ];

  const conferenceReviews: ConferenceReview[] = [
    {
      conference: "IEEE Int. Conference on Image Processing (ICIP)",
      role: "Reviewer",
      year: "2023",
      papersReviewed: 6,
      specialTracks: ["Inverse Problems", "Deep Learning", "Medical Imaging"]
    },
    {
      conference: "IEEE Int. Conference on Acoustics, Speech, & Signal Processing (ICASSP)",
      role: "Reviewer",
      year: "2024",
      papersReviewed: 4,
      specialTracks: ["Image Restoration", "Deep Learning", "Computational Imaging"]
    },
    {
      conference: "European Signal Processing Conference (EUSIPCO)",
      role: "Reviewer",
      year: "2023",
      papersReviewed: 7,
      specialTracks: ["Plug-and-Play", "Computational Imaging", "CNN"]
    }
  ];

  // Calculate total papers reviewed
  const journalPapersCount = journalReviews.reduce((sum, review) => sum + review.papersReviewed, 0);
  const conferencePapersCount = conferenceReviews.reduce((sum, review) => sum + review.papersReviewed, 0);
  const totalPapersReviewed = journalPapersCount + conferencePapersCount;

  return (
    <section id="review-activities" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Review Activities</h2>
        
        <div className="text-center mb-8">
          <p className="text-lg font-medium">
            {totalPapersReviewed} reviews for {journalReviews.length} journals and {conferenceReviews.length} conferences
          </p>
        </div>
        
        <Tabs 
          defaultValue="journals" 
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger 
                value="journals" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <BookOpen size={16} />
                Journal Reviews
              </TabsTrigger>
              <TabsTrigger 
                value="conferences" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <FileText size={16} />
                Conference Reviews
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="journals" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {journalReviews.map((review, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <BookOpen size={18} className="text-primary mr-2" />
                    </div>
                    <CardTitle className="text-lg font-serif">{review.journal}</CardTitle>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm font-medium">{review.role}</p>
                      <p className="text-sm text-muted-foreground">{review.year}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm mb-4">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      <span>{review.papersReviewed} papers reviewed</span>
                    </div>
                    
                    {review.topics && review.topics.length > 0 && (
                      <div>
                        <p className="text-xs font-medium mb-2">Topics:</p>
                        <div className="flex flex-wrap gap-2">
                          {review.topics.map((topic, i) => (
                            <span 
                              key={i}
                              className="bg-primary/10 text-primary text-xs py-0.5 px-2 rounded-md"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="conferences" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conferenceReviews.map((review, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <FileText size={18} className="text-primary mr-2" />
                    </div>
                    <CardTitle className="text-lg font-serif">{review.conference}</CardTitle>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm font-medium">{review.role}</p>
                      <p className="text-sm text-muted-foreground">{review.year}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm mb-4">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      <span>{review.papersReviewed} papers reviewed</span>
                    </div>
                    
                    {review.specialTracks && review.specialTracks.length > 0 && (
                      <div>
                        <p className="text-xs font-medium mb-2">Special Tracks:</p>
                        <div className="flex flex-wrap gap-2">
                          {review.specialTracks.map((track, i) => (
                            <span 
                              key={i}
                              className="bg-primary/10 text-primary text-xs py-0.5 px-2 rounded-md"
                            >
                              {track}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ReviewActivitiesSection;
