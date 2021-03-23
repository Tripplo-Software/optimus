const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const css = require('rollup-plugin-css-only')
const cssnano = require('cssnano')
// const svg = require('rollup-plugin-svg')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      css({ output: 'dist/optimus-ui.css' }),
      postcss({
        plugins: [
          autoprefixer(),
          tailwindcss('./tailwind.config.js'),
          cssnano({
            preset: 'default',
          }),
          // svg(),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    )
    return config
  },
}
