module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 4px 24px rgba(120, 120, 120, 0.1)',
      },
      colors: {
        'color-primary': '#00621D',
        'color-secondary': '#008132',
        'color-tertiary': '#00923E',
        'color-accent': '#15A449',
        'color-accent-dark': '#20B352',
        'color-logo-dark': '#4CBF6C',
        'color-logo-light': '#70CB86',
        'color-logo-loghter': '#9BD9A9',
        'color-main-logo': '#F3FE6B',

        'background-primary-dark': '#232323',
        'background-primary-light': '#FAFAFA',
        'border-primary': '#787878',
        'border-invalid': '#ef4444',
        /*
        
        verificar se essas cores são necessárias

        'color-background-medium': '#444444',
        'color-background-light-medium': '#636363',
        'color-background-lighter': '#A1A1A1',
        'color-background-lightest': '#BFBFBF',
        'color-background-very-light': '#E2E2E2',
        'color-background-very-lighter': '#F0F0F0',
        'color-background-very-lightest': '#F5F5F5',
        */

      },
      fontFamily: {
        LibreFranklin: ['LibreFranklin'],
        LibreFranklinItalic: ['LibreFranklinItalic'],
        Inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
