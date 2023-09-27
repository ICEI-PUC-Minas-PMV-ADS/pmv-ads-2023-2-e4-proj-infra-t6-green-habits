import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ['../app/**/*.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    {
      name: 'storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  implementation: require.resolve('sass'),
                  sassOptions: {
                    includePaths: ['node_modules'],
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public'],
};
export default config;
