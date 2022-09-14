module.exports = {
  purge: {
    enable: process.env.NODE_ENV !== 'development',
    content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js", "./*.{html,js,ts}"],
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }
}