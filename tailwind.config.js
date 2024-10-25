/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.500rem',
        '2xs': '0.600rem', // Ukuran lebih kecil dari text-xs (10px)
        '1xl': ['1.100rem', '1.80'], 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Tambahkan Poppins sebagai font kustom
      },
      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "25%": { width: "100%" }, // Typing effect completed
          "50%": { width: "100%" }, // Text stays visible for a while
          "75%": { width: "0%" }, // Text erases
          "100%": { width: "0%" } // Prepare for next typing cycle
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" }
        },
        "slide-in-left": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(-90%, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%) rotate(90deg)', opacity: 0 },
          '100%': { transform: 'translateX(0) rotate(90deg)', opacity: 1 },
        },
        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        "fade-ini": {
          "0%": {
            opacity: 0
          },
          "50%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        zoomin: 'zoom-in 0.5s ease-in-out 0s 1',
        zoomin1: 'zoom-in 1s ease-in-out 0s 1',
        zoomin2: 'zoom-in 1.5s ease-in-out 0s 1',
        zoomin3: 'zoom-in 2s ease-in-out 0s 1',
        zoomin4: 'zoom-in 2.5s ease-in-out 0s 1',
        zoomin5: 'zoom-in 3s ease-in-out 0s 1',
        zoomin6: 'zoom-in 3.5s ease-in-out 0s 1',
        zoomin7: 'zoom-in 4s ease-in-out 0s 1',
        fadein: 'fade-ini 5s ease-in-out 0s 1',
        fadeIn: 'fade-in 1s ease-in-out 0s 1',
        typing: "typing 3.5s steps(30, end) infinite, blink .60s step-end",
        slideinleft: "slide-in-left 0.5s ease-in-out 0.25s 1",
        fadeinleft: 'fade-in-left 1s ease-in-out 0s 1',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
