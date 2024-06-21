/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroyBold: ['Gilroy-Bold', 'sans-serif'],
        gilroyHeavy: ['Gilroy-Heavy', 'sans-serif'],
        gilroyLight: ['Gilroy-Light', 'sans-serif'],
        gilroyMedium: ['Gilroy-Medium', 'sans-serif'],
        gilroy: ['Gilroy-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
