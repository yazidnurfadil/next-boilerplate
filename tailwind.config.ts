import { parkwindPlugin } from '@park-ui/tailwind-plugin';
import type { Config } from 'tailwindcss';

const isStorybook =
  process.env.npm_package_scripts_build_storybook === 'storybook build';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [parkwindPlugin],
  safelist: isStorybook
    ? [
        {
          pattern: /bg-.+/,
          variants: ['lg', 'hover', 'focus', 'lg:hover'],
        },
        {
          pattern: /text-.+/,
          variants: ['lg', 'hover', 'focus', 'lg:hover'],
        },
      ]
    : [],
  darkMode: ['class'],
};
export default config;
