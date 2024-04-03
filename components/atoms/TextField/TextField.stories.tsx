import { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Atoms/TextField',
  // argTypes: {
  //     variant: {
  //         control: {
  //             type: "select",
  //             options: ["orange", "green", "yellow"],
  //         },
  //     },
  // },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseTextField: Story = {
  args: {
    size: 'sm',
  },
};
