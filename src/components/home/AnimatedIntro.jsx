import { TypeAnimation } from 'react-type-animation';
import { PERSONAL_INFO } from '../../config/constants';

const AnimatedIntro = () => {
  return (
    <div>
      <h2 className="text-textSecondary text-xl mb-2">Hi, I'm</h2>
      <h1
        className="text-5xl md:text-7xl font-bold mb-4"
        style={{
          background: 'linear-gradient(135deg, #00D4FF 0%, #8B5CF6 50%, #EC4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
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
        className="text-3xl md:text-4xl font-semibold text-neon-cyan"
        repeat={Infinity}
      />
      <p className="text-textSecondary text-lg mt-4 italic">
        {PERSONAL_INFO.tagline}
      </p>
    </div>
  );
};

export default AnimatedIntro;
