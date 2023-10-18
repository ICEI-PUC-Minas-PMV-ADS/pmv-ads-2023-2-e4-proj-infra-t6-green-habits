import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { FormContactUs } from './index'

const formContactUs = {
  component: FormContactUs,
  title: 'Organisms/FormContactUs',
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
} satisfies Meta<typeof FormContactUs>

export default formContactUs

type Story = StoryObj<typeof formContactUs>
export const Primary: Story = {}
