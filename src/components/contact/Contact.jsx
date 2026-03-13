import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../config/constants';

const EarthCanvas = lazy(() => import('../3d/EarthCanvas'));

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, url: SOCIAL_LINKS.github, label: 'Github', color: '#c2a4ff' },
    { icon: FaLinkedin, url: SOCIAL_LINKS.linkedin, label: 'Linkedin', color: '#00D4FF' },
    { icon: FaTwitter, url: SOCIAL_LINKS.twitter, label: 'Twitter', color: '#8B5CF6' },
    { icon: FaInstagram, url: SOCIAL_LINKS.instagram, label: 'Instagram', color: '#EC4899' },
    { icon: FaFacebook, url: SOCIAL_LINKS.facebook, label: 'Facebook', color: '#10B981' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
      {/* Left - Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3
          className="text-5xl md:text-6xl font-bold mb-8"
          style={{
            background: 'linear-gradient(135deg, #c2a4ff, #00D4FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get in Touch
        </h3>

        {/* Email */}
        <div className="mb-6">
          <p className="text-textSecondary text-sm uppercase tracking-wider mb-2">Email</p>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-lg md:text-xl font-medium transition-colors duration-300 hover-link-effect"
            style={{ color: '#c2a4ff' }}
          >
            {SOCIAL_LINKS.email}
          </a>
        </div>

        {/* Location */}
        <div className="mb-8">
          <p className="text-textSecondary text-sm uppercase tracking-wider mb-2">Location</p>
          <p className="text-lg font-medium text-textPrimary">{PERSONAL_INFO.location}</p>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-textSecondary text-sm uppercase tracking-wider mb-4">Social</p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map(({ icon: Icon, url, label, color }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm"
                style={{
                  border: `1px solid ${color}30`,
                  color: '#94A3B8',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.borderColor = `${color}60`;
                  e.currentTarget.style.background = `${color}10`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94A3B8';
                  e.currentTarget.style.borderColor = `${color}30`;
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon className="text-lg" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right - 3D Earth */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-80 md:h-[400px] hidden md:block"
      >
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: '#c2a4ff', borderTopColor: 'transparent' }} />
            </div>
          }
        >
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default Contact;
