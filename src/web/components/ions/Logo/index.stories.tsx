import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from '.'

const logo = {
  title: 'Ions/Logo',
  component: Logo,
  tags: ['autodocs'],
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
} satisfies Meta<typeof Logo>

export default logo

type Story = StoryObj<typeof logo>

export const Primary: Story = {
  parameters: {
    layout: 'centered',
  },
}
