/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screen:{
        'widescreen':{
          'raw':'(min-aspect-ratio:3/2)'
        },
        'tallscreen':{
          'raw':'(max-aspect-ratio:13/20)',
        }
      },
      keyframes:{
        'open-menu':{
          '0%' :{transform:'scale-Y(0)'},
          '80%':{tranform:'scale-Y(1.2)'},
          '100%':{transform:'scale-Y(1)'},
        }
      },
      animation:{
        'open-menu':'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

