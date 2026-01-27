import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../config/constants';
import { scrollToSection } from '../../utils/scrollUtils';
import MobileDrawer from './MobileDrawer';

const MobileAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background to-surface/95 backdrop-blur-xl border-b border-white/10">
        <div className="px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold text-white hover:text-gray-300 transition-colors"
          >
            {PERSONAL_INFO.name}
          </button>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-xl text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-lg"
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
