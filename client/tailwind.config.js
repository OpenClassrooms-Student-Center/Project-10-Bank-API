/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#12002b',
        'blue-grey': '#2c3e50',
        'blue-green': '#42b983',
        'blue-green-border': '#006841',
        'dark-grey': '#222',
      },
      screens: {
        'medium': '720px',
        'large': '920px',
      },
      borderWidth: {
        '10': '10px',
      },
      backgroundPosition: {
        'bottom-9': 'center bottom -9rem',
        'bottom-16': 'center bottom -16rem',
      },
      height: {
        '75': '300px', 
        '100': '400px', 
      },
      width: {
        '25': '100px',
        '50': '200px',
        '75': '300px',
      },
      fontSize: {
        '3.5xl': '2em',
        '4.5xl': '2.5em',
      }
    },
  },
  plugins: [],
}

