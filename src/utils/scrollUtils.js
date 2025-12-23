/**
 * Smooth scroll to a section by ID with custom easing
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from top in pixels (default: 80 for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = 800; // 800ms for smoother scroll
        let start = null;

        // Easing function for smooth animation
        const easeInOutCubic = (t) => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }
};

/**
 * Get all section IDs from the page
 * @returns {Array} - Array of section IDs
 */
export const getSectionIds = () => {
    return ['home', 'about', 'experience', 'projects', 'services'];
};
