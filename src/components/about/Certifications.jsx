import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../config/constants';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="card"
    >
      <div className="flex items-center gap-3 mb-8">
        <FaAward className="text-4xl text-secondary" />
        <h2 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
          Certifications
        </h2>
      </div>
      
      <div className="space-y-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex flex-col md:flex-row gap-6 p-6 bg-background/50 rounded-xl hover:bg-background/70 transition-all duration-300 group"
          >
            {/* Certification Logo */}
            {cert.logo && (
              <div className="flex-shrink-0">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-24 h-24 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
            
            {/* Certification Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-secondary font-semibold mb-2">{cert.issuer}</p>
              <p className="text-textSecondary text-sm mb-3">{cert.date}</p>
              <p className="text-textSecondary mb-4">{cert.description}</p>
              
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary 
                             transition-colors font-medium"
                >
                  View Credential <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;
