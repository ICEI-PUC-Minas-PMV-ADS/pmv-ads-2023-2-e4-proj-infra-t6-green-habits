import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Ranking } from './index'

const ranking = {
  component: Ranking,
  title: 'Organisms/Ranking',
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
} satisfies Meta<typeof Ranking>

export default ranking

type Story = StoryObj<typeof ranking>
export const Primary: Story = {}
