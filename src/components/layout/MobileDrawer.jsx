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
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    // Close drawer after a short delay for smooth UX
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-0 top-0 h-full w-64 bg-surface shadow-2xl z-50 p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-textPrimary hover:text-primary transition-colors duration-300"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            
            <nav className="mt-12 flex flex-col gap-6">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="text-lg font-medium text-textSecondary hover:text-primary 
                             transition-all duration-300 text-left hover:translate-x-2"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Social Icons in Drawer */}
            <div className="absolute bottom-8 left-6 right-6">
              <div className="flex justify-center gap-4 flex-wrap">
                {socialIcons.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-textSecondary hover:text-primary transition-all duration-300 
                               hover:scale-110 text-xl"
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

