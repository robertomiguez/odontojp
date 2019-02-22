// if you want to change directory dist to doc
const path = require('path')

module.exports = {
  lintOnSave: true,
  outputDir: path.resolve(__dirname, './docs'),
  publicPath: 'odontojp'
}
