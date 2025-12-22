import { motion } from 'framer-motion';
import { EDUCATION } from '../../config/constants';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="card"
    >
      <h2 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8">
        Education
      </h2>
      
      <div className="space-y-6">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="border-l-4 border-primary pl-6 py-2"
          >
            <h3 className="text-xl font-semibold text-textPrimary mb-2">
              {edu.degree}
            </h3>
            <p className="text-secondary font-medium mb-1">{edu.institution}</p>
            <p className="text-textSecondary">{edu.score}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
