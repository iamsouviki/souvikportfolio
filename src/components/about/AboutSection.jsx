import { motion } from 'framer-motion';
import { ABOUT, PERSONAL_INFO } from '../../config/constants';

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card-3d p-8"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2
            className="text-4xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Who Am I?
          </h2>
          <p className="text-textSecondary leading-relaxed whitespace-pre-line break-words">
            {ABOUT.whoAmI}
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="flex justify-center"
          style={{ perspective: '800px' }}
        >
          <div className="relative">
            <img
              src={PERSONAL_INFO.imagePath}
              alt={PERSONAL_INFO.name}
              loading="lazy"
              className="w-64 h-64 object-cover rounded-2xl relative z-10"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))',
              }}
            />
            {/* Neon border glow */}
            <div
              className="absolute -inset-1 rounded-2xl z-0"
              style={{
                background: 'linear-gradient(135deg, #00D4FF40, #8B5CF640, #EC489940)',
                filter: 'blur(8px)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
