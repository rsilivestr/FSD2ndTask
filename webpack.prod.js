const merge = require('webpack-merge'),
      common = require('./webpack.common.js'),
      TerserJSPlugin = require('terser-webpack-plugin'),
      OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {  
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
  mode: 'production',
  devtool: 'source-map',
});