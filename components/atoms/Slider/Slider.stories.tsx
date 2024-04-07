import { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  title: 'Atoms/Slider',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseSlider: Story = {
  args: {
    variant: 'orange',
  },
};
