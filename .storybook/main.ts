import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'sb-color-pallete',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
export default config;
