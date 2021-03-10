const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src', 'Styles/fonts.css', 'Styles/index.sass'],
    cards: './src/pages/cards/cards',
    formElements: './src/pages/form-elements/form-elements',
    headersFooters: './src/pages/headers-footers/headers-footers',
    landing: './src/pages/landing/landing',
    login: './src/pages/login/login',
    register: './src/pages/register/register',
    roomDetails: './src/pages/room-details/room-details',
    searchRoomFilter: './src/pages/search-room-filter/search-room-filter',
  },
  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      datepicker: 'air-datepicker',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/colors/colors.pug',
      filename: 'pages/colors.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/form-elements/form-elements.pug',
      filename: 'pages/form-elements.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/cards/cards.pug',
      filename: 'pages/cards.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/headers-footers/headers-footers.pug',
      filename: 'pages/headers-footers.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/landing/landing.pug',
      filename: 'pages/landing.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/search-room-filter/search-room-filter.pug',
      filename: 'pages/search-room-filter.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/room-details/room-details.pug',
      filename: 'pages/room-details.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/register/register.pug',
      filename: 'pages/register.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/login/login.pug',
      filename: 'pages/login.html',
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      ignoreOrder: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets/images',
        },
        {
          from: 'src/assets/fonts',
          to: 'assets/fonts',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        include: path.resolve(__dirname, 'src'),
        use: ['pug-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, 'src/assets/fonts/'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'assets/fonts',
              context: path.resolve(__dirname, './src/assets/fonts'),
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src/assets/images'),
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Pages: path.resolve(__dirname, 'src/pages/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Components: path.resolve(__dirname, 'src/components/'),
    },
  },
};
