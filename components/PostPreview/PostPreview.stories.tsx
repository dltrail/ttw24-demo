import type { Meta, StoryObj } from '@storybook/react';
import PostPreview from './PostPreview';

const meta = {
  title: 'Organism/PostPreview',
  component: PostPreview,
  tags: ['autodocs'],

} satisfies Meta<typeof PostPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      summaryTitle: 'Custom GPTs: Decode Jamie',
      slug: '',
      date: '2024-03-25T00:00:00Z',
      coverImage: {
        url: 'https://thetin.net/media/rpxiqfrt/decode-thumb.png',
        umbracoWidth: '638px',
        umbracoHeight: 'auto'
      },
      tags: ['Insights'],
    }
  },
};



