/**
 * Smooth scroll to a section by ID with custom easing
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from top in pixels (default: 80 for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    const container = document.getElementById('main-container');
    if (element && container) {
        const targetScrollTop = element.offsetTop - offset;
        container.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
    }
};

/**
 * Get all section IDs from the page
 * @returns {Array} - Array of section IDs
 */
export const getSectionIds = () => {
    return ['home', 'about', 'experience', 'projects', 'services'];
};
