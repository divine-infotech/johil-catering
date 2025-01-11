/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            white: "#ffffff",
            yellow: "#ffb703",
            black: "#000000",
            gray: "#e5e5e5",
         },
         keyframes: {
            'modal-pop': {
              '0%': { transform: 'scale(0.9)', opacity: 0 },
              '100%': { transform: 'scale(1)', opacity: 1 },
            }
         },
         animation: {
            'modal-pop': 'modal-pop 0.3s ease-out forwards',
         },
      },
   },
   plugins: [],
};
