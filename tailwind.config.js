module.exports = {
    content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js", "./index.html", "**/*.{html, js}", "**/**/*.{html, js}"],
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }