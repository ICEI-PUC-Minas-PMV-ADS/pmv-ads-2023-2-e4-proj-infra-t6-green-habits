import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'

const icon = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: 'leaf',
    fill: 'green',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        'check-01',
        'check-02',
        'heart',
        'leaf',
        'menu',
        'minus',
        'pencil',
        'plus',
        'recycle',
        'repeat',
        'trash',
        'tree',
        'trophy',
        'tulip',
        'x',
        'arrow-left',
        'arrow-right',
      ],
    },
    className: {
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
} satisfies Meta<typeof Icon>

export default icon

type Story = StoryObj<typeof icon>

export const Primary: Story = {}
