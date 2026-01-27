import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '../../config/constants';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative z-10 ${
            selectedCategory === 'All'
              ? 'bg-white/95 text-black border-2 border-black/20'
              : 'bg-surface text-textSecondary hover:text-white hover:bg-surface/80'
          }`}
        >
          All
        </button>
        {SKILL_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative z-10 ${
              selectedCategory === category
                ? 'bg-white/95 text-black border-2 border-black/20'
                : 'bg-surface text-textSecondary hover:text-white hover:bg-surface/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Modern Skills Grid - NO PERCENTAGES, NO PROGRESS BARS */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.03 }}
            className="group relative z-10"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-surface/60 border border-white/10 rounded-xl hover:bg-surface/80 hover:border-white/20 transition-all duration-300">
              <span className="text-textPrimary font-medium group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
