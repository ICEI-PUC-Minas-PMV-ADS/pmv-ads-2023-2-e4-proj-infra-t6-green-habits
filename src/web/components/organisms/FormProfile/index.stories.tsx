import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { FormProfile } from './index'

const formProfile = {
  component: FormProfile,
  title: 'Organisms/FormProfile',
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
} satisfies Meta<typeof FormProfile>

export default formProfile

type Story = StoryObj<typeof formProfile>
export const Primary: Story = {}
