module.exports = {
        darkMode: 'class',
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
              display: ['Outfit', 'system-ui', 'sans-serif'],
            },
            colors: {
              primary: '#0BA66C',
              'primary-dark': '#0A7B55',
              'primary-bright': '#10C988',
              secondary: '#0E7490',
              'ice': '#B2EBF2',
              'ice-glow': '#0E7490',
              'bg-dark': '#FAFBFC',
              'surface-dark': '#F1F4F8',
              'surface-card': '#FFFFFF',
              'surface-elevated': '#FFFFFF',
            },
            boxShadow: {
              'tinted': '0 4px 20px rgba(13, 150, 104, 0.06)',
              'tinted-lg': '0 8px 30px rgba(13, 150, 104, 0.10)',
              'tinted-hover': '0 12px 40px rgba(13, 150, 104, 0.14)',
            },
            backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'hero-glow': 'radial-gradient(ellipse at center, rgba(13, 150, 104, 0.06) 0%, transparent 70%)',
              'ice-glow': 'radial-gradient(ellipse at center, rgba(14, 116, 144, 0.06) 0%, transparent 70%)',
            },
            animation: {
              'float': 'float 6s ease-in-out infinite',
              'float-slow': 'float 8s ease-in-out infinite',
              'float-fast': 'float 4s ease-in-out infinite',
              'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
              'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
              'shimmer': 'shimmer 2.5s linear infinite',
              'grid-move': 'gridMove 25s linear infinite',
            },
            keyframes: {
              float: {
                '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                '50%': { transform: 'translateY(-20px) rotate(2deg)' },
              },
              'pulse-glow': {
                '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(13, 150, 104, 0.15)' },
                '50%': { opacity: '1', boxShadow: '0 0 40px rgba(13, 150, 104, 0.25)' },
              },
              fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(30px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              shimmer: {
                '0%': { backgroundPosition: '-1000px 0' },
                '100%': { backgroundPosition: '1000px 0' }
              },
              gridMove: {
                '0%': { transform: 'rotateX(75deg) translateZ(-150px) translateY(0)' },
                '100%': { transform: 'rotateX(75deg) translateZ(-150px) translateY(80px)' },
              }
            }
          }
        }
      };
module.exports.content = ['./index.html', './*.{ts,tsx}', './components/**/*.{ts,tsx}'];
module.exports.plugins = [require('@tailwindcss/forms'), require('@tailwindcss/typography')];
module.exports.safelist = ['focus:ring-primary', 'focus:border-primary', 'focus:ring-secondary', 'focus:border-secondary'];
