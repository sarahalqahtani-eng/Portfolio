/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4EEE3',
        'paper-dim': '#ECE4D4',
        ink: '#2B2723',
        'ink-soft': '#5B5449',
        'ink-faint': '#6E6656',
        accent: '#9C6B33',
        'accent-soft': '#B98B54',
        line: '#DDD2BB',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        edit: '1180px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
