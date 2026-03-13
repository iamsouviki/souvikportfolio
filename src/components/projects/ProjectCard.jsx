import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const neonColors = ['#00D4FF', '#8B5CF6', '#EC4899', '#10B981'];
  const cardColor = neonColors[index % neonColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="card-3d group relative overflow-hidden cursor-pointer"
    >
      {/* Animated top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${cardColor}, transparent)` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
      />

      <div className="flex flex-col md:flex-row gap-5 p-5 md:p-6">
        {project.logo && (
          <motion.div
            className="flex-shrink-0"
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={project.logo}
              alt={project.name}
              loading="lazy"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg"
              style={{ filter: `drop-shadow(0 0 8px ${cardColor}40)` }}
            />
          </motion.div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <h3 className="text-lg md:text-xl font-bold text-textPrimary group-hover:text-white transition-colors break-words">
              {project.name}
              {project.featured && (
                <motion.span
                  className="ml-2 text-[10px] px-2 py-0.5 rounded-full font-medium inline-block"
                  style={{ background: `${cardColor}20`, color: cardColor, border: `1px solid ${cardColor}40` }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Featured
                </motion.span>
              )}
            </h3>

            {project.url && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-sm whitespace-nowrap"
                style={{ color: cardColor }}
                whileHover={{ x: 3, scale: 1.05 }}
              >
                <FaGithub className="text-base" />
                View Code
                <FaExternalLinkAlt className="text-[10px]" />
              </motion.a>
            )}
          </div>

          <p className="text-textSecondary leading-relaxed mb-3 text-sm break-words line-clamp-3">
            {project.description}
          </p>

          {project.technologies && (
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                  style={{
                    background: `${neonColors[i % neonColors.length]}12`,
                    color: neonColors[i % neonColors.length],
                    border: `1px solid ${neonColors[i % neonColors.length]}25`,
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: `0 0 12px ${neonColors[i % neonColors.length]}25`,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Shimmer effect on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl pointer-events-none"
      />
    </motion.div>
  );
};

export default ProjectCard;
