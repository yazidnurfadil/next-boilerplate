import React from 'react';

import type { Preview } from '@storybook/react';

import { Providers } from '../app/Providers';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(story, context) => <Providers>{story(context)}</Providers>],
};

export default preview;
