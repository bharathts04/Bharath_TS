import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#FFFFFF',
        'primary-dark': '#0A0A0A',
        'secondary-light': '#F2F2F2',
        'secondary-dark': '#1A1A1A',
        'accent-red': '#D40000',
        'text-light': '#0A0A0A',
        'text-dark': '#EAEAEA',
        'text-muted-light': '#5A5A5A',
        'text-muted-dark': '#A0A0A0',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;