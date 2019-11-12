const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // A webpack plugin to remove/clean your build folder(s).
    new CleanWebpackPlugin(),
    // Plugin that simplifies creation of HTML files to serve your bundles
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          // Creates `style` nodes from JS strings
            'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          // place after css-loader and before sass-loader
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',        
              plugins: [
                require('autoprefixer'),
              ]
            }
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'pug-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'file-loader',
        ],
      },
    ],
  },
};