/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '460px'
      },
      colors: {
        navy: '#1d2671',
        ink: '#0f1740',
        azure: '#0072ce',
        muted: '#3d4566',
        line: '#d9dce6',
        rule: '#c9cdd8',
        mist: '#f7faf7',
        haze: '#dfe2f3',
        fog: '#c9cdea',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
