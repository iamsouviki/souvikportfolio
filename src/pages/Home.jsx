import { useResponsive } from '../hooks/useResponsive';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollSpy } from '../hooks/useScrollSpy';
import MobileAppBar from '../components/layout/MobileAppBar';
import DesktopAppBar from '../components/layout/DesktopAppBar';
import SocialAccounts from '../components/layout/SocialAccounts';
import Introduction from '../components/home/Introduction';
import StatsSection from '../components/home/StatsSection';
import AboutSection from '../components/about/AboutSection';
import Education from '../components/about/Education';
import Skills from '../components/about/Skills';
import Certifications from '../components/about/Certifications';
import ExperienceCard from '../components/experience/ExperienceCard';
import ProjectCard from '../components/projects/ProjectCard';
import ServicesGrid from '../components/services/ServicesGrid';
import Contact from '../components/contact/Contact';
import ScrollToTop from '../components/common/ScrollToTop';
import { EXPERIENCES, PROJECTS, PERSONAL_INFO } from '../config/constants';

const Home = () => {
  const { isMobile } = useResponsive();
  const sectionIds = ['home', 'about', 'experience', 'projects', 'services', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 100);

  const Section = ({ id, children, className = '' }) => {
    const { ref, isVisible } = useScrollReveal();
    return (
      <section
        id={id}
        ref={ref}
        className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}
      >
        {children}
      </section>
    );
  };

  const sectionHeadingStyle = (gradient) => ({
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  return (
    <div id="main-container" className="h-screen bg-background overflow-x-hidden overflow-y-auto" style={{ scrollBehavior: 'smooth' }}>
      {isMobile ? <MobileAppBar /> : <DesktopAppBar activeSection={activeSection} />}
      <SocialAccounts />
      <ScrollToTop />

      {/* Main content — md:pl-16 to avoid social sidebar overlap on desktop */}
      <main className="max-w-7xl mx-auto px-5 md:px-10 md:pl-16 pt-20 relative z-10 overflow-x-hidden">
        {/* Home / Hero Section */}
        <section id="home">
          <Introduction />
          <StatsSection />
        </section>

        {/* About Section */}
        <Section id="about" className="py-16">
          <div className="space-y-10">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#c2a4ff' }}>Introduction</p>
              <h2 className="text-3xl md:text-5xl font-bold" style={sectionHeadingStyle('linear-gradient(135deg, #c2a4ff, #00D4FF)')}>
                About Me
              </h2>
            </div>
            <AboutSection />
            <Education />
            <Skills />
            <Certifications />
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#c2a4ff' }}>What I have done so far</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={sectionHeadingStyle('linear-gradient(135deg, #c2a4ff, #8B5CF6)')}>
              Career & Experience
            </h2>
          </div>
          <div className="space-y-5">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#c2a4ff' }}>My work</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={sectionHeadingStyle('linear-gradient(135deg, #c2a4ff, #EC4899)')}>
              Projects
            </h2>
            <p className="text-textSecondary text-sm md:text-base mt-3 max-w-xl mx-auto">
              Showcasing innovative solutions and creative implementations
            </p>
          </div>
          <div className="space-y-5">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </Section>

        {/* Services / What I Do Section */}
        <Section id="services" className="py-16">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#c2a4ff' }}>Services</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={sectionHeadingStyle('linear-gradient(135deg, #c2a4ff, #10B981)')}>
              What I Do
            </h2>
            <p className="text-textSecondary text-sm md:text-base mt-3 max-w-xl mx-auto">
              Delivering high-quality solutions across web, mobile, and AI
            </p>
          </div>
          <ServicesGrid />
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="py-16">
          <Contact />
        </Section>

        {/* Footer */}
        <footer className="py-8 text-center border-t" style={{ borderColor: 'rgba(194, 164, 255, 0.1)' }}>
          <p className="text-textSecondary text-xs mb-1">
            Designed & Developed by <span style={{ color: '#c2a4ff' }}>{PERSONAL_INFO.name}</span>
          </p>
          <p className="text-textSecondary text-xs opacity-60">
            React + Three.js + Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
