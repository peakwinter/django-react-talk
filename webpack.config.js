const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: './insults/assets/index.js',
  output: {
    path: path.resolve('./insults/assets/bundles'),
    filename: '[name]-[hash].js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.json', 'scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      },
    ],
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ]
}
