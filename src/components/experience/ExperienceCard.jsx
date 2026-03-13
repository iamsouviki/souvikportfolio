import { motion } from 'framer-motion';
import { useMouseParallax } from '../../hooks/useMouseParallax';

const ExperienceCard = ({ experience, index }) => {
  const { rotateX, rotateY } = useMouseParallax(0.015);

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -20, x: -30 }}
      animate={{ opacity: 1, rotateY: 0, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="card-3d group relative overflow-hidden"
      style={{
        perspective: '1000px',
        transform: `perspective(1000px) rotateX(${rotateX * 0.3}deg) rotateY(${rotateY * 0.3}deg)`,
      }}
    >
      {/* Neon timeline indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ background: 'linear-gradient(to bottom, #00D4FF, #8B5CF6, #EC4899)' }} />

      <div className="flex flex-col md:flex-row gap-6 p-6">
        {experience.companyLogo && (
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={experience.companyLogo}
                alt={experience.companyName}
                loading="lazy"
                className="w-20 h-20 object-contain rounded-lg"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.3))' }}
              />
              {/* Glow ring around logo */}
              <div className="absolute -inset-1 rounded-lg border border-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-2 group-hover:text-neon-cyan transition-colors break-words">
            {experience.role}
          </h3>
          <p className="text-secondary font-semibold mb-2 text-sm md:text-base break-words">
            {experience.companyName}
          </p>
          <p className="text-neon-purple text-xs md:text-sm mb-4 font-medium">
            {experience.duration}
          </p>
          <p className="text-textSecondary leading-relaxed text-sm md:text-base break-words">
            {experience.description}
          </p>

          {experience.achievements && (
            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, i) => {
                const colors = ['#00D4FF', '#8B5CF6', '#EC4899', '#10B981'];
                return (
                  <li key={i} className="text-textSecondary text-xs md:text-sm flex items-start gap-2 break-words">
                    <span style={{ color: colors[i % colors.length] }} className="mt-0.5 text-lg">▸</span>
                    <span>{achievement}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
    </motion.div>
  );
};

export default ExperienceCard;
