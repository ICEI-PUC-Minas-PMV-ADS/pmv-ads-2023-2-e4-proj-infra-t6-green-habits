import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { HabitCard } from './index'

const card = {
  title: 'Molecules/Card',
  component: HabitCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Reciclagem Criativa',
    category: 'Ecologia',
    description:
      'A prática envolve reutilizar materiais descartados de maneiras inovadoras, como transformar garrafas plásticas em vasos para plantas ou criar acessórios a partir de tecidos reciclados. ',
    image: '/cards/default.png',
    habitId: '',
    onDelete: () => {},
    token: '',
    setUserHabits: () => {},
    filterByCategory: () => {},
    isSuggestedHabit: false,
  },
  argTypes: {
    image: {
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
} satisfies Meta<typeof HabitCard>

export default card

type Story = StoryObj<typeof card>
export const Primary: Story = {}
