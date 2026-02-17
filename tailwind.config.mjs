/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bosque: {
          50: '#f0f9f1',
          100: '#dbf0de',
          200: '#b9e1c0',
          300: '#8acc96',
          400: '#57b268',
          500: '#349648',
          600: '#257a38',
          700: '#1f612e',
          800: '#1b4d27',
          900: '#174021',
          950: '#0b2312',
        },
        tierra: {
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f2d8b4',
          300: '#e9bd85',
          400: '#df9c54',
          500: '#b07b3e',
          600: '#c67528',
          700: '#a55c21',
          800: '#854a21',
          900: '#6c3e1e',
          950: '#3a1e0e',
        },
        cielo: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bdd7fe',
          300: '#8ec2fc',
          400: '#4693e4',
          500: '#2d7ed6',
          600: '#1d64b8',
          700: '#1a5095',
          800: '#1b447b',
          900: '#1c3a66',
          950: '#132540',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
