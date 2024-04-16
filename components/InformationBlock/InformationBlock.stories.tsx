import type { Meta, StoryObj } from '@storybook/react';
import informationBlock from './InformationBlock';

const meta = {
  title: 'Molecules/Information Block',
  component: informationBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof informationBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextCTA: Story = {
  args: {
    title: "Information Block",
    text: "Information Block text content. Aliqua irure eiusmod enim consequat laborum labore aliqua fugiat quis. Eu id eiusmod eu incididunt. Pariatur et minim duis nisi ex reprehenderit sit velit Lorem magna. Anim voluptate proident incididunt commodo dolor eiusmod nulla velit officia. Amet do magna ipsum ad sint ex velit enim quis amet fugiat. Adipisicing consequat magna voluptate ad veniam voluptate adipisicing dolor laborum irure. Reprehenderit magna non id consectetur anim pariatur sint esse laboris et eu.",
    cta: {
      url: "/contact",
      name: 'Get in Touch',
      target: '_blank'
    },
    style: "text-title"
  },
};

export const SectionTitle: Story = {
  args: {
    title: "Information Block",
    text: "Information Block text content. Aliqua irure eiusmod enim consequat laborum labore aliqua fugiat quis. Eu id eiusmod eu incididunt. Pariatur et minim duis nisi ex reprehenderit sit velit Lorem magna. Anim voluptate proident incididunt commodo dolor eiusmod nulla velit officia. Amet do magna ipsum ad sint ex velit enim quis amet fugiat. Adipisicing consequat magna voluptate ad veniam voluptate adipisicing dolor laborum irure. Reprehenderit magna non id consectetur anim pariatur sint esse laboris et eu.",
    style: "page-title"
  },
};



