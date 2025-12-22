import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../config/constants';
import MobileDrawer from './MobileDrawer';

const MobileAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="bg-surface/80 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </Link>
          
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
