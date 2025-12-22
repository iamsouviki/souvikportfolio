import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedIntro from './AnimatedIntro';
import ProfilePhoto from './ProfilePhoto';
import { PERSONAL_INFO } from '../../config/constants';

const Introduction = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="order-2 md:order-1 relative z-10"
      >
        <AnimatedIntro />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-textSecondary text-base md:text-lg leading-relaxed mt-6 break-words"
        >
          {PERSONAL_INFO.professionDetails}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="mt-8 flex gap-4 flex-wrap"
        >
          <Link 
            to="/about" 
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10">About Me</span>
          </Link>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl border-2 border-primary text-primary 
                       font-semibold hover:bg-primary hover:text-white transition-all 
                       duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="order-1 md:order-2 relative z-10"
      >
        <ProfilePhoto />
      </motion.div>
    </div>
  );
};

export default Introduction;

