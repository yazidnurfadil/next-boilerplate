import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import ChevronUp from '~/assets/icons/chevron-up.svg';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Atoms/Icon',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: { onClick: action('clicked'), color: 'text-black' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseIcon: Story = {
  args: {},
  render: ({ onClick, color }) => (
    <Icon onClick={onClick} color={color}>
      <ChevronUp />
    </Icon>
  ),
};

export const CustomColor: Story = {
  args: {
    color: 'text-blue-500',
  },
  render: ({ onClick, color }) => (
    <Icon onClick={onClick} color={color}>
      <ChevronUp />
    </Icon>
  ),
};

export const CustomSize: Story = {
  args: {
    size: 'text-xl',
  },
  render: ({ onClick, size, color }) => (
    <Icon onClick={onClick} size={size} color={color}>
      <ChevronUp />
    </Icon>
  ),
};

export const Colored: Story = {
  args: {
    color: 'text-blue-500',
  },
  render: ({ onClick, color }) => (
    <div className="flex gap-x-2">
      <Icon onClick={onClick} color={color}>
        <ChevronUp />
      </Icon>
      <Icon onClick={onClick} color="text-green-500">
        <ChevronUp />
      </Icon>
      <Icon onClick={onClick} color="text-orange-500">
        <ChevronUp />
      </Icon>
    </div>
  ),
};
