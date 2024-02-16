/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark': '#1b1b1b',
        'light': '#f5f5f5',
        'green': '#001b34'
      },
      gridAutoRows: {
        'default': 'minmax(100px, auto)'
      },
      animation: {
        slideDown: 'slideDown 2s ease-in-out infinite',
        spinSlow: 'spin 3s linear infinite',
      },
      keyframes: {
        slideDown: {
          '0%, 100%': { transform: 'translateY(5px)' },
          '50%': { transform: 'translateY(0px)' },
        },
      }
    },
  },
  plugins: [],
}
