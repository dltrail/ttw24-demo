import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ChatBlock  from './ChatBlock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ChatBlock',
  component: ChatBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof ChatBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Title: "Let's Chat",
    BodyCopy: "We've been building long-term, trusted relationships with our clients for over 20 years. Get in touch to find out how we can help you.",
    CtaText: "Get in touch",
    CtaUrl: "/contact",
    ColorVariation: "Red"
  },
};


