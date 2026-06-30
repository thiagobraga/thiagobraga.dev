import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import CareerSection from '@/components/home/CareerSection';
import PetsSection from '@/components/home/PetsSection';

const SkillsSection = lazy(() => import('@/components/home/SkillsSection'));

const DeferredSection = ({
  children,
  id,
  minHeight,
}: {
  children: React.ReactNode;
  id: string;
  minHeight: number;
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldRender) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '1200px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={ref} id={id} style={{ minHeight: shouldRender ? undefined : minHeight }}>
      {shouldRender ? (
        <Suspense fallback={null}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

const IndexPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <DeferredSection id="skills" minHeight={760}>
        <SkillsSection />
      </DeferredSection>
      <CareerSection />
      <PetsSection />
    </>
  );
};

export default IndexPage;
