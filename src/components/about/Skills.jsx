import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '../../config/constants';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimateSkills(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="card"
    >
      <h2 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8">
        Skills & Technologies
      </h2>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === 'All'
              ? 'gradient-primary text-white shadow-glow'
              : 'bg-surface text-textSecondary hover:text-primary'
          }`}
        >
          All
        </button>
        {SKILL_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'gradient-primary text-white shadow-glow'
                : 'bg-surface text-textSecondary hover:text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            className="group"
          >
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-textPrimary font-medium group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                  {skill.category}
                </span>
              </div>
              <span className="text-secondary font-semibold">{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill group-hover:shadow-glow"
                style={{
                  width: animateSkills ? `${skill.percentage}%` : '0%',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
