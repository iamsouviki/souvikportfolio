import { motion } from 'framer-motion';
import { STATS } from '../../config/constants';

const StatsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
    >
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2 + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          className="card text-center group cursor-pointer relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text 
                            text-transparent mb-2 group-hover:scale-110 transition-transform 
                            neon-glow">
              {stat.value}
            </div>
            <div className="text-textSecondary text-sm md:text-base group-hover:text-textPrimary 
                            transition-colors">
              {stat.label}
            </div>
          </div>
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/30 
                          to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 
                          transition-opacity duration-500" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
