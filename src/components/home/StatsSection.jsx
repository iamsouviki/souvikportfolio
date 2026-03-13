import { motion } from 'framer-motion';
import { STATS } from '../../config/constants';
import { useMouseParallax } from '../../hooks/useMouseParallax';

const StatsSection = () => {
  const { rotateX, rotateY } = useMouseParallax(0.02);

  const neonColors = ['#00D4FF', '#8B5CF6', '#EC4899', '#10B981'];

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
          whileHover={{ scale: 1.08, y: -8 }}
          className="card-3d text-center group cursor-pointer relative overflow-hidden"
          style={{
            transform: `perspective(800px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`,
            borderColor: `${neonColors[index]}33`,
          }}
        >
          {/* Neon top border */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${neonColors[index]}, transparent)` }}
          />

          {/* Content */}
          <div className="relative z-10 p-6">
            <div
              className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform"
              style={{ color: neonColors[index] }}
            >
              {stat.value}
            </div>
            <div className="text-textSecondary text-sm md:text-base group-hover:text-textPrimary transition-colors">
              {stat.label}
            </div>
          </div>

          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{
              background: `radial-gradient(circle at center, ${neonColors[index]}10, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
