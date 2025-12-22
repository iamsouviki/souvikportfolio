import { useResponsive } from '../hooks/useResponsive';
import MobileAppBar from '../components/layout/MobileAppBar';
import DesktopAppBar from '../components/layout/DesktopAppBar';
import SocialAccounts from '../components/layout/SocialAccounts';
import ExperienceCard from '../components/experience/ExperienceCard';
import { EXPERIENCES } from '../config/constants';

const Experience = () => {
  const { isMobile } = useResponsive();

  return (
    <div className="min-h-screen gradient-background overflow-x-hidden">
      {isMobile ? <MobileAppBar /> : <DesktopAppBar />}
      <SocialAccounts />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-5xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent mb-12 text-center">
          My Experience
        </h1>
        
        <div className="space-y-6">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Experience;

