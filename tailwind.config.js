/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e7d32',
          light: '#60ad5e',
          dark: '#005005',
        },
        secondary: {
          DEFAULT: '#004d40',
          light: '#39796b',
          dark: '#00251a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
