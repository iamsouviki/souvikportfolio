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
          DEFAULT: '#00D4FF',
          dark: '#0099CC',
          light: '#66E5FF',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
          light: '#A78BFA',
        },
        accent: {
          pink: '#EC4899',
          emerald: '#10B981',
          gold: '#F59E0B',
        },
        neon: {
          cyan: '#00D4FF',
          purple: '#8B5CF6',
          pink: '#EC4899',
          green: '#10B981',
        },
        surface: '#0A0A0F',
        background: '#000005',
        textPrimary: '#FFFFFF',
        textSecondary: '#94A3B8',
        error: '#EF4444',
        success: '#10B981',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.1)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.1)',
        'glow': '0 0 20px rgba(0, 212, 255, 0.2), 0 0 40px rgba(139, 92, 246, 0.1)',
        'glow-lg': '0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(139, 92, 246, 0.15)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 212, 255, 0.05)',
        'premium': '0 10px 40px rgba(0, 212, 255, 0.1), 0 0 20px rgba(139, 92, 246, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float-3d': 'float3d 6s ease-in-out infinite',
        'neon-border': 'neonBorder 3s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)' },
        },
        float3d: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-15px) rotateX(3deg)' },
        },
        neonBorder: {
          '0%, 100%': { borderColor: 'rgba(0, 212, 255, 0.5)' },
          '33%': { borderColor: 'rgba(139, 92, 246, 0.5)' },
          '66%': { borderColor: 'rgba(236, 72, 153, 0.5)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
