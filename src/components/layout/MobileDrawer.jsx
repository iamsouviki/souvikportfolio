import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../config/constants';
import { scrollToSection } from '../../utils/scrollUtils';

const MobileDrawer = ({ isOpen, onClose }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setTimeout(() => onClose(), 300);
  };

  const socialIcons = [
    { icon: FaLinkedin, url: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: FaTwitter, url: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: FaInstagram, url: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: FaFacebook, url: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: FaEnvelope, url: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
  ];

  const neonColors = ['#00D4FF', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)' }}
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-0 top-0 h-full w-72 z-50 p-6"
            style={{
              background: 'rgba(10, 10, 20, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRight: '1px solid rgba(0, 212, 255, 0.15)',
              boxShadow: '10px 0 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl transition-colors duration-300"
              style={{ color: '#EC4899' }}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <nav className="mt-12 flex flex-col gap-4">
              {navLinks.map(({ id, label }, index) => (
                <motion.button
                  key={id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => handleNavClick(id)}
                  className="text-lg font-medium transition-all duration-300 text-left px-3 py-2 rounded-lg"
                  style={{ color: '#94A3B8' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = neonColors[index % neonColors.length];
                    e.currentTarget.style.background = `${neonColors[index % neonColors.length]}10`;
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {label}
                </motion.button>
              ))}
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <div className="w-full h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)' }} />
              <div className="flex justify-center gap-4 flex-wrap">
                {socialIcons.map(({ icon: Icon, url, label }, i) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition-all duration-300 hover:scale-110 text-xl"
                    style={{ color: '#94A3B8' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = neonColors[i % neonColors.length]}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
