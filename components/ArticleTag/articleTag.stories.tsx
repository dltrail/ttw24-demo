import type { Meta, StoryObj } from '@storybook/react';
import ArticleTag from './ArticleTag';

const meta = {
  title: 'Atom/ArticleTag',
  component: ArticleTag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tag: {
      control: 'text',
      description: 'Overwriiten tag detail',
      table: {
        defaultValue: { summary: 'Article Tag' }
      },
    }
  },

  tags: ['autodocs'],

} satisfies Meta<typeof ArticleTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: "I'm an Article Tag",
  },
};