const path = require('path');

module.exports = {
    entry: {
      main: './src/js/index.js',
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
  };