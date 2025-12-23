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
          DEFAULT: '#818CF8', // Lighter Indigo 400 (was 600)
          dark: '#6366F1',    // Indigo 500 (was 700)
        },
        secondary: {
          DEFAULT: '#5EEAD4', // Lighter Teal 300 (was 500)
          dark: '#2DD4BF',    // Teal 400 (was 600)
        },
        surface: '#1F2937',   // Grey 800 (unchanged)
        background: '#111827', // Grey 900 (unchanged)
        textPrimary: '#F3F4F6',  // Softer white (Grey 100)
        textSecondary: '#D1D5DB', // Lighter grey (Grey 300, was #B3B3B3)
        error: '#F87171',     // Lighter Red 400 (was 500)
        success: '#34D399',   // Lighter Green 400 (was 500)
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(129, 140, 248, 0.2)', // Softer glow
        'card': '0 4px 8px rgba(0, 0, 0, 0.2)',      // Lighter shadow
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
