import { useState, useEffect } from 'react';

export const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 600 && window.innerWidth < 1024);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 600);
            setIsTablet(width >= 600 && width < 1024);
            setIsDesktop(width >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMobile, isTablet, isDesktop };
};
