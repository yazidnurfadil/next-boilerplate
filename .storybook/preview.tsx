import React from 'react';

import type { Preview } from '@storybook/react';
import type { ColorPaletteAsObject } from 'sb-color-pallete/dist/ts/colorPicker/types';
import resolveConfig from 'tailwindcss/resolveConfig';

import { Providers } from '../app/Providers';
import tailwindConfig from '../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

const bgTwPalletes: ColorPaletteAsObject = {};
const textTwPalletes: ColorPaletteAsObject = {};
Object.keys(fullConfig.theme.colors).map((colorGroup) => {
  if (
    ['inherit', 'current', 'transparent', 'black', 'white'].includes(colorGroup)
  ) {
    return;
  }
  bgTwPalletes[colorGroup] = bgTwPalletes[colorGroup] || {};
  textTwPalletes[colorGroup] = textTwPalletes[colorGroup] || {};
  Object.keys(fullConfig.theme.colors[colorGroup]).map((colorCode) => {
    bgTwPalletes[colorGroup][`bg-${colorGroup}-${colorCode}`] =
      fullConfig.theme.colors[colorGroup][colorCode];
    textTwPalletes[colorGroup][`text-${colorGroup}-${colorCode}`] =
      fullConfig.theme.colors[colorGroup][colorCode];
  });
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        string: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    colorPicker: {
      controlValueType: 'label',
      applyColorTo: ['background', 'textColor'],
      palettes: [
        {
          name: 'Tailwind bg',
          palette: bgTwPalletes,
        },
        {
          name: 'Tailwind text',
          palette: textTwPalletes,
        },
      ],
    },
  },
  decorators: [(story, context) => <Providers>{story(context)}</Providers>],
};

export default preview;
