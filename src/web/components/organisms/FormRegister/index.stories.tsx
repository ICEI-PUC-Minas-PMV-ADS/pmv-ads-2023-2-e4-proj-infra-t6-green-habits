import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { FormRegister } from './index'

const formRegister = {
  component: FormRegister,
  title: 'Organisms/FormRegister',
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
} satisfies Meta<typeof FormRegister>

export default formRegister

type Story = StoryObj<typeof formRegister>
export const Primary: Story = {}
