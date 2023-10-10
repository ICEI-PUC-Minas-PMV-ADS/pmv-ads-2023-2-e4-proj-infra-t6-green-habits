import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './index'

const input = {
  title: 'Molecules/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    id: 'email',
    label: 'Email',
    placeholder: 'bloody.mary@hell.com',
    type: 'email',
  },
  argTypes: {
    
    id: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    error: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onKeyDown: {
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
} satisfies Meta<typeof Input>

export default input

type Story = StoryObj<typeof input>

export const Default: Story = {
  parameters: {
    backgrounds: { default: 'dark-mode' },
  },
} as Meta<typeof Input>
