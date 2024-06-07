/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-light-purple": "#dfb6be",
        "custom-dark-purple": "#59427a",
        "custom-dark-pink": "#bd6bb7",
        "custom-light-purple-box":"#edd5da",
        "custom-light-gray":"#d5c7e8",
        "cutsom-off-white":"#f2f2f2"
      },
      colors: {
        "custom-light-purple": "#dfb6be",
        "custom-dark-purple": "#59427a",
        "custom-dark-pink": "#bd6bb7",
        "custom-light-gray":"#d5c7e8",
        "color-white":"#FFFFFF"
      },
      width: {
        "1326px": "1326px",
        "250px":"250px",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Open Sans', 'sans-serif'],

      },
      margin:{
        "55px":"55px",
        "209px":"209px"
      },
      inset:{
        "162px":"162px",
        "330px":"330px"
      },
      letterSpacing:{
        "3px":"3px",
        
      },
      lineHeight:{
        "4.5rem":"4.5rem"
      },
      width:{
        "380px":"380px",
        "975px":"975px"
      },
      borderRadius:{
        "35px":"35px"
      }
    },
  },
  plugins: [],
}
