import type { Preview } from '@storybook/react'
import '../styles/main.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: '',
      values: [
        {
          name: 'dark',
          value: '#242525',
        },
      ],
    },
  },
}

export default preview
