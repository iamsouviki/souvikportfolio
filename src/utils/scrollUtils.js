/**
 * Smooth scroll to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from top in pixels (default: 80 for navbar)
 */
export const scrollToSection = (sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

/**
 * Get all section IDs from the page
 * @returns {Array} - Array of section IDs
 */
export const getSectionIds = () => {
    return ['home', 'about', 'experience', 'projects', 'services'];
};
