import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../config/constants';
import { FaArrowRight } from 'react-icons/fa';

const ServicesPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="card relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse-glow" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-primary rounded-full 
                       text-white font-semibold hover:shadow-glow transition-all duration-300 
                       hover:scale-105 group"
          >
            View All
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {SERVICES.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 bg-surface/50 backdrop-blur-sm rounded-xl border border-primary/20 
                         hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-textPrimary group-hover:text-primary transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPreview;
