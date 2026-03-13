import { motion } from 'framer-motion';
import { useState } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '../../config/constants';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colorMap = {
      'Backend': '#00D4FF',
      'Frontend': '#8B5CF6',
      'Mobile': '#EC4899',
      'Database': '#10B981',
      'AI/ML': '#F59E0B',
      'DevOps': '#00D4FF',
      'Cloud': '#8B5CF6',
    };
    return colorMap[category] || '#00D4FF';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="card-3d p-6 md:p-8"
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-6"
        style={{
          background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Skills & Technologies
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory('All')}
          className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
          style={{
            background: selectedCategory === 'All' ? '#00D4FF' : 'rgba(0, 212, 255, 0.1)',
            color: selectedCategory === 'All' ? '#000' : '#00D4FF',
            border: `1px solid ${selectedCategory === 'All' ? '#00D4FF' : 'rgba(0, 212, 255, 0.3)'}`,
          }}
        >
          All
        </button>
        {SKILL_CATEGORIES.map((category) => {
          const color = getCategoryColor(category);
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: selectedCategory === category ? color : `${color}15`,
                color: selectedCategory === category ? '#000' : color,
                border: `1px solid ${selectedCategory === category ? color : `${color}40`}`,
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Skills Grid — 3D animated items */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        layout
      >
        {filteredSkills.map((skill, index) => {
          const color = getCategoryColor(skill.category);
          return (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: index * 0.03, type: 'spring', stiffness: 200, damping: 20 }}
              whileHover={{
                scale: 1.1,
                y: -6,
                rotateY: 8,
                boxShadow: `0 8px 25px ${color}25`,
              }}
              className="group cursor-pointer"
              style={{ perspective: '500px' }}
            >
              <div
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: `${color}08`,
                  border: `1px solid ${color}25`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${color}18`;
                  e.currentTarget.style.borderColor = `${color}60`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${color}15, inset 0 0 20px ${color}05`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${color}08`;
                  e.currentTarget.style.borderColor = `${color}25`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Animated glow dot */}
                <motion.div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: color, boxShadow: `0 0 8px ${color}60` }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
                />
                <span className="text-textPrimary font-medium group-hover:text-white transition-colors text-xs md:text-sm">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
