import { useResponsive } from '../hooks/useResponsive';
import MobileAppBar from '../components/layout/MobileAppBar';
import DesktopAppBar from '../components/layout/DesktopAppBar';
import SocialAccounts from '../components/layout/SocialAccounts';
import ServicesGrid from '../components/services/ServicesGrid';

const Services = () => {
  const { isMobile } = useResponsive();

  return (
    <div className="min-h-screen gradient-background overflow-x-hidden">
      {isMobile ? <MobileAppBar /> : <DesktopAppBar />}
      <SocialAccounts />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-5xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent mb-4 text-center">
          Services I Offer
        </h1>
        <p className="text-textSecondary text-lg text-center mb-12 max-w-3xl mx-auto">
          Delivering high-quality solutions across web, mobile, and AI technologies
        </p>
        
        <ServicesGrid />
      </main>
    </div>
  );
};

export default Services;

