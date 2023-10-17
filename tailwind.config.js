/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/components/pricing/Pricing.jsx",
    "./src/components/about/About.jsx",
    "./src/components/gallery/Gallery.jsx",
    "./src/components/header/Header.jsx",
    "./src/components/main/MainComponent.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'Arial', 'sans-serif'],
      },
      backgroundImage:{
        'main': "url('https://res.cloudinary.com/duqilis2i/image/upload/v1697466255/barbershop/homeLanding_kgwk88.jpg')"
      }
    },
  },
  plugins: [],
}
