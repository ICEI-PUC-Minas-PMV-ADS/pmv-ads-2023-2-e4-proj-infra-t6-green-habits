import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { LinkItem } from '.'

const link = {
  title: 'Atoms/Link',
  component: LinkItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    href: '/',
    children: 'Link',
    hasIcon: false,
    icon: 'leaf',
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    icon: {
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
} satisfies Meta<typeof LinkItem>

export default link

type Story = StoryObj<typeof link>

export const Primary: Story = {}
