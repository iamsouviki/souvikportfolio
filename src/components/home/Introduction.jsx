import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { PERSONAL_INFO } from '../../config/constants';
import { scrollToSection } from '../../utils/scrollUtils';

const Introduction = () => {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="absolute top-10 left-0 w-48 h-48 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-neon-cyan/3 rounded-full blur-3xl pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-textSecondary text-sm md:text-base mb-3 tracking-wider uppercase"
          >
            Hello! I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4"
            style={{
              background: 'linear-gradient(135deg, #c2a4ff 0%, #00D4FF 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.05',
            }}
          >
            {PERSONAL_INFO.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-textSecondary text-sm md:text-base">A Creative </span>
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'AI Enthusiast',
                2000,
                'Mobile Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-sm md:text-base font-semibold"
              style={{ color: '#c2a4ff' }}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-textSecondary text-sm md:text-base leading-relaxed max-w-md mb-6"
          >
            {PERSONAL_INFO.professionDetails.substring(0, 180)}...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex gap-3 flex-wrap"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #c2a4ff, #8B5CF6)',
                boxShadow: '0 0 15px rgba(194, 164, 255, 0.2)',
              }}
            >
              About Me
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{ border: '1.5px solid #c2a4ff60', color: '#c2a4ff' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#c2a4ff'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c2a4ff'; }}
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Photo with 3D floating effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-1 md:order-2 relative z-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Glowing rings behind photo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute -inset-6 rounded-full border opacity-30"
              style={{ borderColor: '#c2a4ff', borderStyle: 'dashed' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute -inset-10 rounded-full border opacity-20"
              style={{ borderColor: '#00D4FF', borderStyle: 'dashed' }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute -inset-14 rounded-full border opacity-10"
              style={{ borderColor: '#8B5CF6', borderStyle: 'dashed' }}
            />

            {/* Neon glow behind photo */}
            <div
              className="absolute -inset-2 rounded-full blur-xl"
              style={{ background: 'linear-gradient(135deg, #c2a4ff30, #00D4FF20, #8B5CF630)' }}
            />

            {/* Profile Photo */}
            <img
              src={PERSONAL_INFO.imagePath}
              alt={PERSONAL_INFO.name}
              className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full relative z-10"
              style={{
                border: '3px solid rgba(194, 164, 255, 0.4)',
                boxShadow: '0 0 30px rgba(194, 164, 255, 0.2), 0 0 60px rgba(0, 212, 255, 0.1)',
              }}
            />

            {/* Floating tech badges around photo */}
            {['⚛️', '☕', '🤖', '📱'].map((emoji, i) => {
              const angle = (i / 4) * Math.PI * 2;
              const radius = 140;
              return (
                <motion.div
                  key={i}
                  animate={{
                    x: [Math.cos(angle) * radius, Math.cos(angle + 0.5) * radius, Math.cos(angle) * radius],
                    y: [Math.sin(angle) * radius, Math.sin(angle + 0.5) * radius, Math.sin(angle) * radius],
                  }}
                  transition={{ repeat: Infinity, duration: 6 + i, ease: 'easeInOut' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(194, 164, 255, 0.5))' }}
                >
                  {emoji}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-textSecondary text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-7 rounded-full border flex justify-center pt-1"
          style={{ borderColor: '#c2a4ff30' }}
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-1.5 rounded-full"
            style={{ background: '#c2a4ff' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Introduction;
