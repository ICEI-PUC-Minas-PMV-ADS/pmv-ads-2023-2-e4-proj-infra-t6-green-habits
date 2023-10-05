import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'

const button = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    aria: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    icon: {
      control: { type: 'select' },
      options: ['leaf', 'trash', 'tulip', 'recycle', 'repeat', 'tree'],
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
} satisfies Meta<typeof Button>

export default button

type Story = StoryObj<typeof button>

export const Primary: Story = {
  args: {
    label: 'Button',
    isButton: true,
    hasIcon: true,
    level: 'primary',
    icon: 'tulip',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    isButton: true,
    hasIcon: true,
    level: 'secondary',
    icon: 'tulip',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as Meta<typeof Button>

export const Tertiary: Story = {
  args: {
    label: 'Button',
    isButton: true,
    hasIcon: true,
    level: 'tertiary',
    icon: 'tulip',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as Meta<typeof Button>

export const Small: Story = {
  args: {
    isButton: true,
    hasIcon: true,
    icon: 'tulip',
    size: 'small',
    aria: 'aria',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
  },
} as Meta<typeof Button>
