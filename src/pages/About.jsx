import { useResponsive } from '../hooks/useResponsive';
import MobileAppBar from '../components/layout/MobileAppBar';
import DesktopAppBar from '../components/layout/DesktopAppBar';
import SocialAccounts from '../components/layout/SocialAccounts';
import AboutSection from '../components/about/AboutSection';
import Education from '../components/about/Education';
import Skills from '../components/about/Skills';
import Certifications from '../components/about/Certifications';
import ServicesPreview from '../components/about/ServicesPreview';
import ScrollToTop from '../components/common/ScrollToTop';

const About = () => {
  const { isMobile } = useResponsive();

  return (
    <div className="min-h-screen gradient-background overflow-x-hidden">
      {isMobile ? <MobileAppBar /> : <DesktopAppBar />}
      <SocialAccounts />
      <ScrollToTop />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="space-y-8">
          <AboutSection />
          <Education />
          <Skills />
          <Certifications />
          <ServicesPreview />
          
          <p className="text-center text-textSecondary text-sm mt-12">
            Design & Build by Souvik with ❤ React + Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;

