import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../config/constants';
import { scrollToSection } from '../../utils/scrollUtils';
import MobileDrawer from './MobileDrawer';

const MobileAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(0, 0, 5, 0.85)',
          backdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
        }}
      >
        <div className="px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold transition-colors"
            style={{
              background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {PERSONAL_INFO.name}
          </button>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-xl p-2 rounded-lg transition-all duration-300"
            style={{ color: '#00D4FF' }}
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
