/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#355B3E",
        secondary: "#F5DBC4",
        dimgreenButton: "#029664",
        dimgreenText: "#58745E",
      },
      backgroundImage: {
        //  'hero-bg': "url('./src/assets/background.jpeg')",
         'hero-bg': "url('https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/7817b008-6661-4409-a89a-79fb490b658d/PT-en-20240107-trifectadaily-perspective_alpha_website_small.jpg')",
        
         
       },
 
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
       
      },
    },
    screens: {
      xs: "480px",
      ss: "600px",
      ssinput:"700px",
      sm: "768px",
      smm: "960px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
 };
 