module.exports = {
  important: true,
  // 使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化。
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // 'portrait': {'raw': '(orientation: portrait)'},
        // => @media (orientation: portrait) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
