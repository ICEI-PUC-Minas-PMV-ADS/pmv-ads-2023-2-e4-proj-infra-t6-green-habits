import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { FrameItem } from '.'

const frame = {
  title: 'Molecules/FrameItem',
  component: FrameItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: 'tree',
    frameTitle: 'This is a title',
    frameText: 'This is a text',
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Sprites />
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof FrameItem>

export default frame

type Story = StoryObj<typeof frame>
export const Primary: Story = {}
