import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently in view
 * @param {Array} sectionIds - Array of section IDs to track
 * @param {number} offset - Offset from top in pixels (default: 100)
 * @returns {string} - Currently active section ID
 */
export const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const container = document.getElementById('main-container');
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollTop + offset;

            // Find the current section
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollPosition >= sectionTop) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        };

        // Initial check
        handleScroll();

        // Add scroll listener
        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, offset]);

    return activeSection;
};
