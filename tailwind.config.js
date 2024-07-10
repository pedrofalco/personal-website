/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "jet-brains-mono": ['JetBrains Mono', 'monospace'],
      },
      colors : {
        'ivory' : '#fffff0'	
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }], // 10px font size with 16px line height
      },
      lineHeight: {
        '2xs': '1rem', // 16px line height
      },
    }
  },
  plugins: []
};