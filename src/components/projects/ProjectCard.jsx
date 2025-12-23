import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card group hover:shadow-glow transition-all duration-300 tilt-hover spotlight"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {project.logo && (
          <div className="flex-shrink-0">
            <img
              src={project.logo}
              alt={project.name}
              className="w-20 h-20 object-contain rounded-lg"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-textPrimary group-hover:text-primary transition-colors break-words">
              {project.name}
            </h3>
            
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary 
                           transition-colors font-medium text-sm md:text-base whitespace-nowrap"
              >
                <FaGithub className="text-lg" />
                View Code
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
          
          <p className="text-textSecondary leading-relaxed mb-4 text-sm md:text-base break-words whitespace-pre-line">
            {project.description}
          </p>
          
          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs md:text-sm 
                             font-medium hover:bg-primary/30 transition-colors break-words rotate-scale-hover"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
