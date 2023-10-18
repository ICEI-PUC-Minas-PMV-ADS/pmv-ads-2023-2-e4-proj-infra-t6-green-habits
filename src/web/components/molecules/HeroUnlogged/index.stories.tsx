import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { HeroUnlogged } from './index'

const heroUnlogged = {
  title: 'Molecules/HeroUnlogged',
  component: HeroUnlogged,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClose: {
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
} satisfies Meta<typeof HeroUnlogged>

export default heroUnlogged

type Story = StoryObj<typeof heroUnlogged>
export const Primary: Story = {}
