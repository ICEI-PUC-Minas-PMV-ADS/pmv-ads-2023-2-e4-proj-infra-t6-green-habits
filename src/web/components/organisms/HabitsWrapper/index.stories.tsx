import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { HabitsWrapper } from './index'

const habitsWrapper = {
  component: HabitsWrapper,
  title: 'Organisms/HabitsWrapper',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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
} satisfies Meta<typeof HabitsWrapper>

export default habitsWrapper

type Story = StoryObj<typeof habitsWrapper>
export const Primary: Story = {}
