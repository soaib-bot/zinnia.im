module.exports = {
  plugins: [
    require('postcss-url')({
      url: 'rebase',
      assetsPath: 'static',
      useHash: false
    })
  ]
}
