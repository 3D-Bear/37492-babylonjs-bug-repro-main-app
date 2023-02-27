const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/main-app-index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'main-app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};