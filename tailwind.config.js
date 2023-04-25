/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      animation: {
        'once-pulce': 'pulse 1s linear normal',
        'visible-appear': 'appear 0.26s ease-in-out normal'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '40%': { opacity: '0.55' },
          '60%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

