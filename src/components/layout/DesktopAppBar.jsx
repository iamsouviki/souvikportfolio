import { PERSONAL_INFO } from '../../config/constants';
import { scrollToSection } from '../../utils/scrollUtils';

const DesktopAppBar = ({ activeSection }) => {

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background to-surface/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="text-lg font-bold text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none"
          >
            {PERSONAL_INFO.name}
          </button>

          <div className="flex gap-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none
                  ${activeSection === id
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopAppBar;
