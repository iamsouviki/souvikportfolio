import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../config/constants';

const ProfilePhoto = () => {
  return (
    <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
      {/* Animated rings */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
      
      {/* Glow effect */}
      <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
      
      {/* Rotating gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-spin" style={{ animationDuration: '8s' }} />
      <div className="absolute inset-1 rounded-full bg-background" />
      
      {/* Photo */}
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        src={PERSONAL_INFO.imagePath}
        alt={PERSONAL_INFO.name}
        className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full shadow-2xl"
      />
      
      {/* Floating particles */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/50 rounded-full blur-sm animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/50 rounded-full blur-sm animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute top-1/4 -left-8 w-4 h-4 bg-primary/30 rounded-full blur-sm animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
    </div>
  );
};

export default ProfilePhoto;
