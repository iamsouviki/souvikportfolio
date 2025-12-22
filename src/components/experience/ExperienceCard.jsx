import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card group hover:shadow-glow transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {experience.companyLogo && (
          <div className="flex-shrink-0">
            <img
              src={experience.companyLogo}
              alt={experience.companyName}
              className="w-20 h-20 object-contain rounded-lg"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors break-words">
            {experience.role}
          </h3>
          <p className="text-secondary font-semibold mb-2 text-sm md:text-base break-words">
            {experience.companyName}
          </p>
          <p className="text-textSecondary text-xs md:text-sm mb-4">{experience.duration}</p>
          <p className="text-textSecondary leading-relaxed text-sm md:text-base break-words">
            {experience.description}
          </p>
          
          {experience.achievements && (
            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-textSecondary text-xs md:text-sm flex items-start gap-2 break-words">
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
