import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import TimelineSection from '@/components/home/TimelineSection';
import BlogSection from '@/components/home/BlogSection';
import MusicSection from '@/components/home/MusicSection';
import PetsSection from '@/components/home/PetsSection';

const IndexPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TimelineSection />
      <BlogSection />
      <MusicSection />
      <PetsSection />
    </>
  );
};

export default IndexPage;
