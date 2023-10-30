import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { AboutUs } from '.'

const aboutUs = {
  title: 'Organisms/AboutUs',
  component: AboutUs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{maxWidth: 1440}}>
          <Sprites />
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof AboutUs>

export default aboutUs

type Story = StoryObj<typeof aboutUs>
export const Primary: Story = {}
