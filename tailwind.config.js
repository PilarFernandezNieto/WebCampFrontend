import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
         principal: ['Red Hat Display', defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'imagen-hero': "url('/img/ImagenHero.jpg')",
      }
    },
  },
  plugins: [forms],
}
