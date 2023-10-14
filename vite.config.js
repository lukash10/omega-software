const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = {
  plugins: [createVuePlugin()],
  server: {
    proxy: {
      // with options
      '/api': {
        target: 'http://localhost:3080',
        changeOrigin: true,
        secure: false
      }
    }
  }
};



