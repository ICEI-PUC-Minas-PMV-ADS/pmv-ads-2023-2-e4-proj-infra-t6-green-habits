import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from '.'

const banner = {
  title: 'Organisms/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    image: '/banner.png',
  },
  argTypes: {
    image: {
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
} satisfies Meta<typeof Banner>

export default banner

type Story = StoryObj<typeof banner>
export const Primary: Story = {}
