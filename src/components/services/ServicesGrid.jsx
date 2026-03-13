import { motion } from 'framer-motion';
import { SERVICES } from '../../config/constants';
import { useMouseParallax } from '../../hooks/useMouseParallax';

const ServicesGrid = () => {
  const { rotateX, rotateY } = useMouseParallax(0.01);
  const neonColors = ['#00D4FF', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#00D4FF'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {SERVICES.map((service, index) => {
        const color = neonColors[index % neonColors.length];
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="card-3d group cursor-pointer relative overflow-hidden"
            style={{
              perspective: '800px',
              transform: `perspective(800px) rotateX(${rotateX * 0.2}deg) rotateY(${rotateY * 0.2}deg)`,
            }}
          >
            {/* Neon top border */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
            />

            {/* Content */}
            <div className="relative z-10 p-6">
              <div
                className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ filter: `drop-shadow(0 0 12px ${color}60)` }}
              >
                {service.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-3 transition-colors"
                style={{ color: 'white' }}
              >
                {service.title}
              </h3>
              <p className="text-textSecondary leading-relaxed group-hover:text-textPrimary/90 transition-colors">
                {service.description}
              </p>
            </div>

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 70%)`,
              }}
            />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServicesGrid;
