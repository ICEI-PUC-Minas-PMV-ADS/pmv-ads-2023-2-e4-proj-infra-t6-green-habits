import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { FormLogin } from './index'

const formLogin = {
  component: FormLogin,
  title: 'Organisms/FormLogin',
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
} satisfies Meta<typeof FormLogin>

export default formLogin

type Story = StoryObj<typeof formLogin>
export const Primary: Story = {}
