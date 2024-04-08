import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Link  from './Link';

const meta = {
  title: 'Organism/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    linkText: 'normal CTA',
    url: '#',
    type: 'inText'
  },
};

export const Tinnovation: Story = {
  args: {
    linkText: 'Tinnovation CTA',
    url: '#',
    type: 'tinnovation'
  },
};


