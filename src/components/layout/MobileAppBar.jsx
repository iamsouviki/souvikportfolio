import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../config/constants';
import { scrollToSection } from '../../utils/scrollUtils';
import MobileDrawer from './MobileDrawer';

const MobileAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="bg-surface/95 backdrop-blur-xl shadow-2xl fixed top-0 left-0 right-0 z-50 border-b border-primary/10">
        <div className="px-4 py-5 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent relative group"
          >
            <span className="relative z-10">{PERSONAL_INFO.name}</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-2xl text-textPrimary hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
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
