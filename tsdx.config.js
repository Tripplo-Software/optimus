const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const css = require('rollup-plugin-css-only')
const cssnano = require('cssnano')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      css({ output: 'dist/umqombothi.css' }),
      postcss({
        plugins: [
          autoprefixer(),
          tailwindcss('./tailwind.config.js'),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    )
    return config
  },
}
