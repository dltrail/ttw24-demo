import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ChatBlock from './ChatBlock';

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
    data: {
      title: "Let's Chat",
      bodyCopy: "We've been building long-term, trusted relationships with our clients for over 20 years. Get in touch to find out how we can help you.",
      colour: "Red",
      cta: {
        url: "/contact",
        name: 'Get in Touch',
        target: '_blank'
      }
    }
  },
};



