import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-bio-text':
          'linear-gradient(90deg, rgba(255,147,193,1) 0%, rgba(255,129,88,1) 57%, rgba(255,194,114,1) 100%)',
        'gradient-pop-button':
          'linear-gradient(145deg, rgba(84,254,235,1) 0%, rgba(167,116,255,1) 100%)',
        'gradient-pop-button-reverse':
          'linear-gradient(235deg, rgba(167,116,255,1) 0%, rgba(84,254,235,1) 100%)',
      },
      colors: {
        'dark-navy': '#1a1b26', // main background
        'darker-navy': '#16161e', // alternative dark background
        'dark-blue-gray': '#24283b', // lighter background
        'light-gray-blue': '#a9b1d6', // primary text
        'lighter-blue': '#c0caf5', // emphasized text
        'lighter-gray': '#a9adc1', // lighter gray than primary text
        'grayish-blue': '#414868', // ui components e.g. buttons navigation
        'darker-gray': '#565f89', // less emphasized ui elements
        'accent-cyan': '#7dcfff',
        'accent-blue': '#7aa2f7',
        'accent-purple': '#bb9af7',
        'accent-green': '#9ece6a',
        'accent-orange': '#ff9e64',
        'accent-red': '#f7768e',
      },
      gridTemplateRows: {
        '2-auto': 'repeat(2, minmax(0, auto))',
      },
    },
  },
  plugins: [],
};
export default config;
