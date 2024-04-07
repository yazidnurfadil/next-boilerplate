import { Meta, StoryObj } from '@storybook/react';

import { NumberField } from './NumberField';

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: 'Atoms/NumberField',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseNumberField: Story = {
  args: {
    size: 'sm',
  },
};
