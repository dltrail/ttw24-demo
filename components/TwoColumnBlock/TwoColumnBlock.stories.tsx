import type { Meta, StoryObj } from '@storybook/react';
import {TwoColumnBlock} from './TwoColumnBlock';

const meta = {
  title: 'Molecules/Two Column Block',
  component: TwoColumnBlock,
  tags: ['autodocs'],
    argTypes: {
  
      className: {
        table: {
          disable: true
        }
    },}

} satisfies Meta<typeof TwoColumnBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
      col1:"Column 1",
      col2: "Column 2"
  },
};



