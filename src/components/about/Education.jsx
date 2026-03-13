import { motion } from 'framer-motion';
import { EDUCATION } from '../../config/constants';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const neonColors = ['#00D4FF', '#8B5CF6', '#EC4899'];

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
          animate={{ rotateY: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <FaGraduationCap className="text-3xl" style={{ color: '#EC4899' }} />
        </motion.div>
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #EC4899, #F59E0B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Education
        </h2>
      </div>

      <div className="space-y-4">
        {EDUCATION.map((edu, index) => {
          const color = neonColors[index % neonColors.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ x: 8, scale: 1.02, boxShadow: `0 4px 20px ${color}15` }}
              className="pl-5 py-3 rounded-r-xl transition-all duration-300 cursor-pointer"
              style={{
                borderLeft: `3px solid ${color}60`,
                background: `${color}05`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = color;
                e.currentTarget.style.background = `${color}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = `${color}60`;
                e.currentTarget.style.background = `${color}05`;
              }}
            >
              <h3 className="text-lg font-semibold text-textPrimary mb-1">{edu.degree}</h3>
              <p className="text-textSecondary font-medium text-sm mb-1">{edu.institution}</p>
              <motion.p
                className="font-semibold text-sm"
                style={{ color }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                {edu.score}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Education;
