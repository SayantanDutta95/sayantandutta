
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
      conference: "Association for Computational Linguistics (ACL)",
      role: "Senior Program Committee Member",
      year: "2023",
      papersReviewed: 12,
      specialTracks: ["Machine Translation", "Low-Resource NLP"]
    },
    {
      conference: "Neural Information Processing Systems (NeurIPS)",
      role: "Reviewer",
      year: "2022, 2023",
      papersReviewed: 8,
      specialTracks: ["NLP", "Deep Learning Theory"]
    },
    {
      conference: "International Conference on Machine Learning (ICML)",
      role: "Area Chair",
      year: "2022",
      papersReviewed: 15,
      specialTracks: ["Representation Learning"]
    },
    {
      conference: "Empirical Methods in Natural Language Processing (EMNLP)",
      role: "Reviewer",
      year: "2020, 2021, 2022",
      papersReviewed: 9
    },
    {
      conference: "Conference on Computer Vision and Pattern Recognition (CVPR)",
      role: "Reviewer",
      year: "2021, 2022",
      papersReviewed: 6,
      specialTracks: ["Vision and Language"]
    },
    {
      conference: "International Conference on Learning Representations (ICLR)",
      role: "Reviewer",
      year: "2021, 2022, 2023",
      papersReviewed: 10
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
