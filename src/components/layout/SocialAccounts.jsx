import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../config/constants';

const SocialAccounts = () => {
  const socialIcons = [
    { icon: FaLinkedin, url: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: FaTwitter, url: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: FaInstagram, url: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: FaFacebook, url: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: FaEnvelope, url: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {socialIcons.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-textSecondary hover:text-primary transition-all duration-300 
                     hover:scale-110 text-2xl"
        >
          <Icon />
        </a>
      ))}
      <div className="w-0.5 h-20 bg-textSecondary mx-auto mt-4" />
    </div>
  );
};

export default SocialAccounts;
