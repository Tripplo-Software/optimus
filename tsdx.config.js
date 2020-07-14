const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const css = require('rollup-plugin-css-only')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          tailwindcss('./tailwind.config.js'),
          css({ output: 'dist/optimus.css' }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    )
    return config
  },
}
