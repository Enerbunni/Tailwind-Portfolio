module.exports = {
    content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js", './**/*.{html,js,ts}'], //prob bad
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }