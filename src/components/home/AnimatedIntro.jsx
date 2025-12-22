import { TypeAnimation } from 'react-type-animation';
import { PERSONAL_INFO } from '../../config/constants';

const AnimatedIntro = () => {
  return (
    <div>
      <h2 className="text-textSecondary text-xl mb-2">Hi, I'm</h2>
      <h1 className="text-5xl md:text-7xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
        {PERSONAL_INFO.name}
      </h1>
      <TypeAnimation
        sequence={[
          'Full-Stack Developer',
          2000,
          'Generative AI Enthusiast',
          2000,
          'React Expert',
          2000,
          'Spring Boot Developer',
          2000,
          'Flutter Developer',
          2000,
          'Problem Solver',
          2000,
        ]}
        wrapper="h2"
        speed={50}
        className="text-3xl md:text-4xl font-semibold text-secondary"
        repeat={Infinity}
      />
      <p className="text-textSecondary text-lg mt-4 italic">
        {PERSONAL_INFO.tagline}
      </p>
    </div>
  );
};

export default AnimatedIntro;

