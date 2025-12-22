import { Link, useLocation } from 'react-router-dom';
import { ROUTES, PERSONAL_INFO } from '../../config/constants';

const DesktopAppBar = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: ROUTES.home, label: 'Home' },
    { path: ROUTES.about, label: 'About' },
    { path: ROUTES.experience, label: 'Experience' },
    { path: ROUTES.projects, label: 'Projects' },
  ];

  return (
    <nav className="bg-surface/80 backdrop-blur-md shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to={ROUTES.home} className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </Link>
          
          <div className="flex gap-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-all duration-300 hover:text-primary
                  ${location.pathname === path ? 'text-primary' : 'text-textSecondary'}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopAppBar;

