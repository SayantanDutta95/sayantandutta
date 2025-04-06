
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PublicationsSection from '../components/PublicationsSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import ResearchLabsSection from '../components/ResearchLabsSection';
import CollaborationsSection from '../components/CollaborationsSection';
import EditorialSection from '../components/EditorialSection';
import OrganizedEventsSection from '../components/OrganizedEventsSection';
import PresentationsSection from '../components/PresentationsSection';
import InternshipsSection from '../components/InternshipsSection';
import CertificatesSection from '../components/CertificatesSection';
import SummerSchoolsSection from '../components/SummerSchoolsSection';
import ReviewActivitiesSection from '../components/ReviewActivitiesSection';
import WebinarsSection from '../components/WebinarsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Dr. Sayantan Dutta - Academic Portfolio";
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <ResearchLabsSection />
      <PublicationsSection />
      <ProjectsSection />
      <CollaborationsSection />
      <EditorialSection />
      <PresentationsSection />
      <OrganizedEventsSection />
      <InternshipsSection />
      <SummerSchoolsSection />
      <CertificatesSection />
      <ReviewActivitiesSection />
      <WebinarsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
