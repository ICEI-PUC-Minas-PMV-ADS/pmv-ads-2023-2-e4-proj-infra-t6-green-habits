import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { GoalsWrapper } from './index'

const goalsWrapper = {
  component: GoalsWrapper,
  title: 'Organisms/GoalsWrapper',
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
} satisfies Meta<typeof GoalsWrapper>

export default goalsWrapper

type Story = StoryObj<typeof goalsWrapper>
export const Primary: Story = {}
