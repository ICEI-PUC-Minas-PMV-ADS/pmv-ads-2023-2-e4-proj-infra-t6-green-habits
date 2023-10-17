import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './index'

const modal = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Sprites />
          <Story>
            <Modal />
          </Story>
        </div>
      )
    },
  ],
} satisfies Meta<typeof Modal>

export default modal

type Story = StoryObj<typeof modal>
export const Primary: Story = {}
