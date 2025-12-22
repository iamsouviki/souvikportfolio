import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import { PERSONAL_INFO, ROUTES } from '../config/constants';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.home);
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen gradient-background flex items-center justify-center overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-primary bg-clip-text text-transparent mb-8">
          {PERSONAL_INFO.name}
        </h1>
        <ClipLoader color="#6366F1" size={50} />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
