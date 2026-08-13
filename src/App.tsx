import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CaseStudyModal } from './components/CaseStudyModal';
import { EngineeringCapabilities } from './components/EngineeringCapabilities';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ServicesSection } from './components/ServicesSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { GitHubActivity } from './components/GitHubActivity';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Footer } from './components/Footer';
import { CursorState, Project } from './types';
import { projectsData } from './data/portfolioData';

export default function App() {
  const [cursorState, setCursorState] = useState<CursorState>({
    text: '',
    variant: 'default',
    active: false,
  });

  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<Project | null>(null);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);

  const handleSelectProjectFromTech = (projectId: string) => {
    const proj = projectsData.find((p) => p.id === projectId);
    if (proj) {
      setSelectedCaseStudyProject(proj);
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] selection:bg-indigo-500/30 selection:text-white font-sans relative overflow-x-hidden bg-editorial-dot">
      {/* Top Editorial Glow Spotlight */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Custom Desktop Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Floating Header Navbar */}
      <Navbar
        setCursorState={setCursorState}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          setCursorState={setCursorState}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
        />

        {/* About Section */}
        <About setCursorState={setCursorState} />

        {/* Featured Projects Showcase */}
        <FeaturedProjects
          setCursorState={setCursorState}
          onOpenCaseStudy={(proj) => setSelectedCaseStudyProject(proj)}
        />

        {/* Engineering Capabilities */}
        <EngineeringCapabilities setCursorState={setCursorState} />

        {/* Technical Stack Ecosystem */}
        <TechStack
          setCursorState={setCursorState}
          onSelectProject={handleSelectProjectFromTech}
        />

        {/* Experience Timeline */}
        <ExperienceTimeline setCursorState={setCursorState} />

        {/* Development Process Methodology */}
        <DevelopmentProcess setCursorState={setCursorState} />

        {/* Services & Collaborations */}
        <ServicesSection
          setCursorState={setCursorState}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Why Work With Me (Concrete Advantages) */}
        <WhyWorkWithMe setCursorState={setCursorState} />

        {/* GitHub Activity & Code Repositories */}
        <GitHubActivity setCursorState={setCursorState} />

        {/* Testimonials Placeholder */}
        <Testimonials />

        {/* Conversion Contact Section */}
        <ContactSection
          setCursorState={setCursorState}
          preselectedService={selectedServiceTitle}
        />
      </main>

      {/* Footer */}
      <Footer setCursorState={setCursorState} />

      {/* Modals */}
      <CaseStudyModal
        project={selectedCaseStudyProject}
        onClose={() => setSelectedCaseStudyProject(null)}
        setCursorState={setCursorState}
      />

      <AiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        setCursorState={setCursorState}
      />
    </div>
  );
}
