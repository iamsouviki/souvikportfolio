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
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

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
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, offset]);

    return activeSection;
};
