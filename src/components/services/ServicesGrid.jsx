import { motion } from 'framer-motion';
import { SERVICES } from '../../config/constants';

const ServicesGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {SERVICES.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="card group cursor-pointer relative overflow-hidden"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 
                          group-hover:from-primary/10 group-hover:to-secondary/10 
                          transition-all duration-500 rounded-2xl" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 
                            filter drop-shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-primary 
                           transition-colors neon-glow">
              {service.title}
            </h3>
            <p className="text-textSecondary leading-relaxed group-hover:text-textPrimary/90 
                          transition-colors">
              {service.description}
            </p>
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                          -translate-x-full group-hover:translate-x-full transition-transform 
                          duration-1000 rounded-2xl" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicesGrid;
