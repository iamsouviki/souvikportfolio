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
    <nav className="bg-surface/95 backdrop-blur-xl shadow-2xl fixed top-0 left-0 right-0 z-50 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavClick('home')}
            className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent hover:scale-105 transition-all duration-300 relative group"
          >
            <span className="relative z-10">{PERSONAL_INFO.name}</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <div className="flex gap-2">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group
                  ${activeSection === id 
                    ? 'text-white' 
                    : 'text-textSecondary hover:text-white'}`}
              >
                {activeSection === id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{label}</span>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300
                  ${activeSection === id ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopAppBar;

