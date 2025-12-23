import { useResponsive } from '../hooks/useResponsive';
import { useScrollReveal } from '../hooks/useScrollReveal';
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
import ScrollToTop from '../components/common/ScrollToTop';
import { EXPERIENCES, PROJECTS } from '../config/constants';

const Home = () => {
  const { isMobile } = useResponsive();

  // Section wrapper component with scroll reveal
  const Section = ({ id, children, className = '', delay = 0 }) => {
    const { ref, isVisible } = useScrollReveal();
    
    return (
      <section
        id={id}
        ref={ref}
        className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </section>
    );
  };

  return (
    <div className="min-h-screen gradient-background overflow-x-hidden">
      {isMobile ? <MobileAppBar /> : <DesktopAppBar />}
      <SocialAccounts />
      <ScrollToTop />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-20">
        {/* Home Section */}
        <section id="home" className="py-12">
          <Introduction />
          <StatsSection />
        </section>

        {/* About Section */}
        <Section id="about" className="py-20">
          <div className="space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 gradient-divider mx-auto mt-4" />
            </div>
            <AboutSection />
            <Education />
            <Skills />
            <Certifications />
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent">
              My Experience
            </h2>
            <div className="w-24 gradient-divider mx-auto mt-4" />
          </div>
          
          <div className="space-y-6">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 gradient-divider mx-auto mt-4" />
            <p className="text-textSecondary text-lg mt-4 max-w-2xl mx-auto">
              Showcasing innovative solutions and creative implementations
            </p>
          </div>
          
          <div className="space-y-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent">
              Services I Offer
            </h2>
            <div className="w-24 gradient-divider mx-auto mt-4" />
            <p className="text-textSecondary text-lg mt-4 max-w-2xl mx-auto">
              Delivering high-quality solutions across web, mobile, and AI technologies
            </p>
          </div>
          
          <ServicesGrid />
        </Section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <p className="text-textSecondary text-sm">
            Design & Build by Souvik with ❤ React + Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
