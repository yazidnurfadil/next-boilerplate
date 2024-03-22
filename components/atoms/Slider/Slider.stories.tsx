import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
    component: Slider,
    title: "Atoms/Slider",
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


export const BaseSlider: Story = {
    args: {
        variant: "orange",
    },
};