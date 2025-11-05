/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutros Industriales
        vapor: {
          50: '#F5F5F7',   // Gris muy claro (fondos suaves)
          100: '#E1E1E3',  // Gris claro (separadores)
          200: '#C4C6C9',  // Gris medio-claro
          300: '#B8BCC2',  // Acento metálico
          400: '#8B8D8F',  // Gris hormigón (textos secundarios)
          500: '#757774',  // Gris cemento original
          600: '#5A5C5E',  // Gris medio-oscuro
          700: '#3A3D42',  // Gris acero (textos principales)
          800: '#2A2D32',  // Gris muy oscuro
          900: '#1A1D23',  // Negro azulado (headers/footer)
        },
        
        // Azul Institucional (derivados del logo)
        azul: {
          50: '#E8E9F2',
          100: '#D1D3E5',
          200: '#A3A7CB',
          300: '#757BB1',
          400: '#474F97',
          500: '#353a8c',  // Azul original del logo
          600: '#2C3166',  // Azul profundo primary
          700: '#1E2347',  // Azul midnight (overlays, CTAs)
          800: '#171A35',
          900: '#0F1123',
        },
        
        // Naranja Construcción (derivados del logo)
        naranja: {
          50: '#FDF3EF',
          100: '#FAE7DF',
          200: '#F5CFBF',
          300: '#F0B79F',
          400: '#EB9F7F',
          500: '#cf5f34',  // Naranja original del logo
          600: '#D4653A',  // Naranja construcción (más vibrante)
          700: '#E87548',  // Naranja hover (estados activos)
          800: '#B54A28',
          900: '#8A3820',
        },
        
        // Color de apoyo
        success: {
          500: '#2D7A4F',  // Verde para proyectos completados
          600: '#236038',
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Urbanist', 'Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '800' }],
        'display': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-mobile': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'deep': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'industrial': '0 10px 40px rgba(26, 29, 35, 0.15)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-industrial': 'linear-gradient(135deg, #1A1D23 0%, #2C3166 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(26, 29, 35, 0.7) 0%, rgba(26, 29, 35, 0.9) 100%)',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}