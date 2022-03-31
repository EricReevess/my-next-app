module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  "compilerOptions": {
    "paths": {
      "@lib/*": ["./lib/*"],
      "@page/*": ["./page/*"],
      "@posts/*": ["./posts/*"],
      "@c/*": ["./components/*"],
      "@images": ["./public/images/*"]
    }
  }
}
