import { PERSONAL_INFO } from '../../config/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection, getSectionIds } from '../../utils/scrollUtils';

const DesktopAppBar = () => {
  const sectionIds = getSectionIds();
  const activeSection = useScrollSpy(sectionIds, 100);
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <nav className="bg-surface/80 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavClick('home')}
            className="text-2xl font-bold gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            {PERSONAL_INFO.name}
          </button>
          
          <div className="flex gap-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`font-medium transition-all duration-300 hover:text-primary relative group
                  ${activeSection === id ? 'text-primary' : 'text-textSecondary'}`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark transition-all duration-300
                  ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopAppBar;

