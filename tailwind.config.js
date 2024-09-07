/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}', // Include all React components
  ],
  theme: {
    extend: {
      fontFamily:{
        libra:'"Libre Baskerville", serif'
      },
      scrollbar: {
        DEFAULT: {
          'width': '12px',
        },
        'track': {
          'background-color': '#f0f0f0',
          'border-radius': '10px',
        },
        'thumb': {
          'background-color': '#888',
          'border-radius': '10px',
          'border': '2px solid #f0f0f0',
        },
        'hover': {
          'background-color': '#555',
        }
      }
    }
  },
  plugins: [],
}

