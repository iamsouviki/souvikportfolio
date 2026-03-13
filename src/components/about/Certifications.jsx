import { motion } from 'framer-motion';
import { useState } from 'react';
import { CERTIFICATIONS } from '../../config/constants';
import { FaExternalLinkAlt, FaAward, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const cardColors = ['#F59E0B', '#EC4899', '#8B5CF6', '#00D4FF', '#10B981'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="card-3d p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <FaAward className="text-3xl" style={{ color: '#F59E0B' }} />
        </motion.div>
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #F59E0B, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Certifications
        </h2>
      </div>

      <div className="space-y-4">
        {CERTIFICATIONS.map((cert, index) => {
          const color = cardColors[index % cardColors.length];
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{
                scale: 1.02,
                y: -3,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col md:flex-row gap-4 p-4 md:p-5 rounded-xl transition-all duration-300 group cursor-pointer"
              style={{
                background: 'rgba(0, 0, 5, 0.5)',
                border: `1px solid ${color}20`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}50`;
                e.currentTarget.style.boxShadow = `0 4px 25px ${color}12, inset 0 0 30px ${color}05`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${color}20`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex-shrink-0">
                {cert.logo && !imageErrors[index] ? (
                  <motion.img
                    src={cert.logo}
                    alt={cert.issuer}
                    onError={() => handleImageError(index)}
                    loading="lazy"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg bg-white/10 p-2"
                    crossOrigin="anonymous"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                ) : (
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/10 rounded-lg"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <FaCertificate className="text-4xl" style={{ color }} />
                  </motion.div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-textPrimary mb-1 group-hover:text-white transition-colors break-words">
                  {cert.name}
                </h3>
                <p className="text-textSecondary font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-xs mb-2" style={{ color }}>{cert.date}</p>
                <p className="text-textSecondary text-sm break-words line-clamp-2">{cert.description}</p>

                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 font-medium text-sm"
                    style={{ color: '#00D4FF' }}
                    whileHover={{ x: 5, color: '#8B5CF6' }}
                  >
                    View Credential <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Certifications;
