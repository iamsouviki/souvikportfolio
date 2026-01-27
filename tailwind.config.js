/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF', // Pure white
          dark: '#E5E5E5',    // Light gray
          light: '#FFFFFF',   // Pure white
        },
        secondary: {
          DEFAULT: '#A3A3A3', // Medium gray
          dark: '#737373',    // Dark gray
          light: '#D4D4D4',   // Light gray
        },
        accent: {
          gold: '#FFFFFF',    // White
          emerald: '#E5E5E5', // Light gray
          rose: '#A3A3A3',    // Medium gray
        },
        surface: '#0A0A0A',   // Almost black
        background: '#000000', // Pure black
        textPrimary: '#FFFFFF',  // White
        textSecondary: '#A3A3A3', // Gray
        error: '#FFFFFF',     // White
        success: '#FFFFFF',   // White
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.05)',
        'glow-lg': '0 0 30px rgba(255, 255, 255, 0.15), 0 0 60px rgba(255, 255, 255, 0.08)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(255, 255, 255, 0.05)',
        'premium': '0 10px 40px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
