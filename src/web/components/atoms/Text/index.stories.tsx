import { Text } from './index'

export default {
  component: Text,
  title: 'Atoms/Text',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    align: 'center',
    color: 'burgundy',
    children: 'Text example',
  },
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['right', 'center', 'left'],
    },
    weight: {
      control: { type: 'select' },
      options: ['Default', '600'],
    },
    color: {
      control: { type: 'select' },
      options: ['black', 'white', 'gray', 'dark-green', 'orange'],
    },
  },
}
export const Default = {}
