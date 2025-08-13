import React from 'react';
import InstitutionalHeader from '@/components/institutional/InstitutionalHeader';
import HeroSection from '@/components/institutional/HeroSection';
import AboutSection from '@/components/institutional/AboutSection';
import NewsSection from '@/components/institutional/NewsSection';
import LocationsSection from '@/components/institutional/LocationsSection';
import TimelineSection from '@/components/institutional/TimelineSection';
import ContactSection from '@/components/institutional/ContactSection';
import CareersSection from '@/components/institutional/CareersSection';
import InstitutionalFooter from '@/components/institutional/InstitutionalFooter';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <InstitutionalHeader />
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <LocationsSection />
      <TimelineSection />
      <ContactSection />
      <CareersSection />
      <InstitutionalFooter />
    </div>
  );
};

export default Home;