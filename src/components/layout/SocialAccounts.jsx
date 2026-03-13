import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../config/constants';

const SocialAccounts = () => {
  const socialIcons = [
    { icon: FaLinkedin, url: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: '#00D4FF' },
    { icon: FaGithub, url: SOCIAL_LINKS.github, label: 'GitHub', color: '#8B5CF6' },
    { icon: FaTwitter, url: SOCIAL_LINKS.twitter, label: 'Twitter', color: '#EC4899' },
    { icon: FaInstagram, url: SOCIAL_LINKS.instagram, label: 'Instagram', color: '#F59E0B' },
    { icon: FaFacebook, url: SOCIAL_LINKS.facebook, label: 'Facebook', color: '#10B981' },
    { icon: FaEnvelope, url: `mailto:${SOCIAL_LINKS.email}`, label: 'Email', color: '#00D4FF' },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {socialIcons.map(({ icon: Icon, url, label, color }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="transition-all duration-300 hover:scale-125 text-2xl"
          style={{ color: '#94A3B8' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = color;
            e.currentTarget.style.filter = `drop-shadow(0 0 8px ${color}60)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94A3B8';
            e.currentTarget.style.filter = 'none';
          }}
        >
          <Icon />
        </a>
      ))}
      <div
        className="w-0.5 h-20 mx-auto mt-4"
        style={{ background: 'linear-gradient(to bottom, #00D4FF50, transparent)' }}
      />
    </div>
  );
};

export default SocialAccounts;
