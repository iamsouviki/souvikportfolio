import { motion } from 'framer-motion';
import { ABOUT, PERSONAL_INFO } from '../../config/constants';

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            Who Am I?
          </h2>
          <p className="text-textSecondary leading-relaxed whitespace-pre-line break-words">
            {ABOUT.whoAmI}
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <img
            src={PERSONAL_INFO.imagePath}
            alt={PERSONAL_INFO.name}
            className="w-64 h-64 object-cover rounded-2xl shadow-glow"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
