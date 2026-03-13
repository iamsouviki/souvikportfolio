import { PERSONAL_INFO } from '../../config/constants';
import { scrollToSection } from '../../utils/scrollUtils';

const DesktopAppBar = ({ activeSection }) => {

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(0, 0, 5, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="text-lg font-bold transition-colors duration-200 focus:outline-none"
            style={{
              background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {PERSONAL_INFO.name}
          </button>

          <div className="flex gap-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none relative"
                style={{
                  background: activeSection === id ? 'rgba(0, 212, 255, 0.15)' : 'transparent',
                  color: activeSection === id ? '#00D4FF' : '#94A3B8',
                  border: activeSection === id ? '1px solid rgba(0, 212, 255, 0.3)' : '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== id) {
                    e.currentTarget.style.color = '#00D4FF';
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== id) {
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {label}
                {/* Active neon indicator */}
                {activeSection === id && (
                  <span
                    className="absolute bottom-0 left-1/4 right-1/4 h-0.5 rounded-full"
                    style={{
                      background: '#00D4FF',
                      boxShadow: '0 0 8px rgba(0, 212, 255, 0.5)',
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopAppBar;
