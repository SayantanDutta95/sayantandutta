
import React from 'react';
import { Search, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReviewActivity {
  conference: string;
  role: string;
  year: string;
  papersReviewed: number;
  specialTracks?: string[];
}

const ReviewActivitiesSection: React.FC = () => {
  const reviewActivities: ReviewActivity[] = [
    {
      conference: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
      role: "Reviewer",
      year: "2024, 2025",
      papersReviewed: 3,
      specialTracks: ["Deep Learning", "Transformer"]
    },
    {
      conference: "IEEE Transactions on Computational Imaging",
      role: "Reviewer",
      year: "2024",
      papersReviewed: 3,
      specialTracks: ["Unrolled Architecture", "CT Reconstruction"]
    },
    {
      conference: "IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control",
      role: "Reviewer",
      year: "2022, 2023",
      papersReviewed: 2,
      specialTracks: ["Tumor Segmentation", "Quantum Evolution Network", "Deep Content-Aware Prior"]
    },
    {
      conference: "IEEE Transactions on Geoscience and Remote Sensing",
      role: "Reviewer",
      year: "2022, 2024",
      papersReviewed: 6,
      specialTracks: ["Seismic Signals", "Quantum-Based Signal Representation"]
    },
    {
      conference: "IEEE Signal Processing Letters",
      role: "Reviewer",
      year: "2023",
      papersReviewed: 1,
      specialTracks: ["Sparse Reconstruction", "Time-Varying Neurodynamic", "Optimization"]
    },
    {
      conference: "IEEE Access",
      role: "Reviewer",
      year: "2021, 2024",
      papersReviewed: 5,
      specialTracks: ["Attention Mechanism", "Cancer Detection", "Hybrid Framework", "Quantum Denoising", "Quantum Processing for Biomedical Images"]
    },
    {
      conference: "Signal Processing",
      role: "Reviewer",
      year: "2023, 2024",
      papersReviewed: 5,
      specialTracks: ["Inverse Problems", "Transformer", "CNN"]
    },
    {
      conference: "Digital Signal Processing",
      role: "Reviewer",
      year: "2024, 2025",
      papersReviewed: 6,
      specialTracks: ["Unsupervised Model", "Residual Network", "Classification", "Time-Signal Data"]
    },
    {
      conference: "Quantum Machine Intelligence",
      role: "Reviewer",
      year: "2024",
      papersReviewed: 1,
      specialTracks: ["Hybrid Classical-Quantum Computing"]
    },
    {
      conference: "Physics of Plasmas",
      role: "Reviewer",
      year: "2023",
      papersReviewed: 2,
      specialTracks: ["Plasma Dynamic", "Pair Plasma"]
    },
    {
      conference: "Geophysical Journal International",
      role: "Reviewer",
      year: "2022",
      papersReviewed: 2,
      specialTracks: ["Seismic Energy Absorption", "Hydrocarbon Detection"]
    },
    {
      conference: "MDPI Journals",
      role: "Reviewer",
      year: "2023, 2024, 2025",
      papersReviewed: 21,
      specialTracks: ["Journal of Marine Science and Engineering", "Entropy", "Sensors", "Fractal and Fractional",
    "Applied System Innovation", "Applied Sciences", "Electronics", "Remote Sensing", "Symmetry"]
    },
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

  return (
    <section id="review-activities" className="bg-blue-50">
      <div className="section-container">
        <h2 className="section-title">Review Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reviewActivities.map((activity, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <Search size={18} className="text-primary mr-2" />
                </div>
                <CardTitle className="text-lg font-serif">{activity.conference}</CardTitle>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-medium">{activity.role}</p>
                  <p className="text-sm text-muted-foreground">{activity.year}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm mb-4">
                  <CheckCircle size={14} className="text-green-500 mr-2" />
                  <span>{activity.papersReviewed} papers reviewed</span>
                </div>
                
                {activity.specialTracks && activity.specialTracks.length > 0 && (
                  <div>
                    <p className="text-xs font-medium mb-2">Special Tracks:</p>
                    <div className="flex flex-wrap gap-2">
                      {activity.specialTracks.map((track, i) => (
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
      </div>
    </section>
  );
};

export default ReviewActivitiesSection;
