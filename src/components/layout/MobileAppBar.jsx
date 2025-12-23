import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../config/constants';
import { scrollToSection } from '../../utils/scrollUtils';
import MobileDrawer from './MobileDrawer';

const MobileAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="bg-surface/80 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold gradient-primary bg-clip-text text-transparent"
          >
            {PERSONAL_INFO.name}
          </button>
          
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-2xl text-textPrimary hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>
      
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default MobileAppBar;
