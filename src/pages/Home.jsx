import { useResponsive } from '../hooks/useResponsive';
import MobileAppBar from '../components/layout/MobileAppBar';
import DesktopAppBar from '../components/layout/DesktopAppBar';
import SocialAccounts from '../components/layout/SocialAccounts';
import Introduction from '../components/home/Introduction';
import StatsSection from '../components/home/StatsSection';

const Home = () => {
  const { isMobile } = useResponsive();

  return (
    <div className="min-h-screen gradient-background overflow-x-hidden">
      {isMobile ? <MobileAppBar /> : <DesktopAppBar />}
      <SocialAccounts />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Introduction />
        <StatsSection />
      </main>
    </div>
  );
};

export default Home;

