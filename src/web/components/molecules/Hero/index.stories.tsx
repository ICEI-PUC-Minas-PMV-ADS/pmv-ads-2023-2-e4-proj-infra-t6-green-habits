import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './index'

const hero = {
  title: 'Molecules/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    image: '/bg.png'
  },
  argTypes: {
    image: {
      table: {
        disabled: true,
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
} satisfies Meta<typeof Hero>

export default hero

type Story = StoryObj<typeof hero>
export const Primary: Story = {}
