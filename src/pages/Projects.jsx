import { useResponsive } from '../hooks/useResponsive';
import { TypeAnimation } from 'react-type-animation';
import MobileAppBar from '../components/layout/MobileAppBar';
import DesktopAppBar from '../components/layout/DesktopAppBar';
import SocialAccounts from '../components/layout/SocialAccounts';
import ProjectCard from '../components/projects/ProjectCard';
import ScrollToTop from '../components/common/ScrollToTop';
import { PROJECTS } from '../config/constants';

const Projects = () => {
  const { isMobile } = useResponsive();

  return (
    <div className="min-h-screen gradient-background overflow-x-hidden">
      {isMobile ? <MobileAppBar /> : <DesktopAppBar />}
      <SocialAccounts />
      <ScrollToTop />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-12 text-center">
          <TypeAnimation
            sequence={['My Projects', 1000]}
            wrapper="h1"
            speed={50}
            className="text-5xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent"
            cursor={false}
          />
        </div>
        
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;

