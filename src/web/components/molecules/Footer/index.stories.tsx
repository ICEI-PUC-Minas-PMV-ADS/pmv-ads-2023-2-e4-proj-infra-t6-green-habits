import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'

const footer = {
  title: 'Molecules/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>

export default footer

type Story = StoryObj<typeof footer>
export const Primary: Story = {}
