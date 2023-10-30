import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Goal } from '.'

const goal = {
  title: 'Molecules/Goal',
  component: Goal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'No live organism can continue for long to exist under conditions of absolute reality; even larks and katydids are supposed, by some, to dream.',
    isCompleted: false,
    id: 'hill',
    token: '',
  },
  argTypes: {
    title: {
      table: {
        disable: true,
      },
    },
    id: {
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
} satisfies Meta<typeof Goal>

export default goal

type Story = StoryObj<typeof goal>
export const Primary: Story = {}
