import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from '.'

const navigation = {
  title: 'Molecules/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    
  },
//   argTypes: {
//     icon: {
//       table: {
//         disable: true,
//       },
//     },
//   },
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
} satisfies Meta<typeof Navigation>

export default navigation

type Story = StoryObj<typeof navigation>
export const Primary: Story = {}
