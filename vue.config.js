const path = require('path')

// npm install stylus-resources-loader --save-dev
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.join(__dirname, './packages/theme/mixins.scss')],
    },
  },
}
