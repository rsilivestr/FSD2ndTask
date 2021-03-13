const merge = require('webpack-merge'),
  common = require('./webpack.common.js'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  TerserJSPlugin = require('terser-webpack-plugin'),
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
});
