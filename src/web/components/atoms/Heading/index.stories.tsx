import { Heading } from './index'

export default {
  component: Heading,
  title: 'Atoms/Heading',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    level: '1',
    align: 'center',
    color: 'dark-green',
    children: 'Title example',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '5', '6'],
    },
    align: {
      control: { type: 'select' },
      options: ['right', 'center', 'left'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'black',
        'white',
        'gray',
        'dark-green',
        'orange',
      ],
    },
  },
}

export const Default = {}
