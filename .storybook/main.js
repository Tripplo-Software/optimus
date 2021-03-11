module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: false,
        module: 'esnext',
        lib: ['dom', 'esnext'],
        importHelpers: true,
        declaration: true,
        sourceMap: true,
        rootDir: './',
        strict: true,
        noUnusedLocals: false,
        noUnusedParameters: false,
        noImplicitReturns: false,
        noFallthroughCasesInSwitch: true,
        moduleResolution: 'node',
      },
    },
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: false,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
