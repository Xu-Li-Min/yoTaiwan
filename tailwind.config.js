module.exports = {
  mode:'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          default: '#666666'
        }
      }
    },
    container: {
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1200px',
        // xl: '1200px',
      },
    },
    fontFamily: {
      'sans': ['Noto Sans TC', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    }

  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}
