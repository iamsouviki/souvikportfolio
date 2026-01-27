/**
 * Smooth scroll to a section by ID with enhanced custom easing and animations
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from top in pixels (default: 80 for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    const container = document.getElementById('main-container');

    if (element && container) {
        const targetScrollTop = element.offsetTop - offset;
        const startScrollTop = container.scrollTop;
        const distance = targetScrollTop - startScrollTop;
        const duration = 800; // 800ms for smooth animation
        let startTime = null;

        // Easing function - ease-in-out cubic for smooth deceleration
        const easeInOutCubic = (t) => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animateScroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = easeInOutCubic(progress);

            container.scrollTop = startScrollTop + distance * easeProgress;

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    }
};

/**
 * Get all section IDs from the page
 * @returns {Array} - Array of section IDs
 */
export const getSectionIds = () => {
    return ['home', 'about', 'experience', 'projects', 'services'];
};
