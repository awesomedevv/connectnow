const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = dir => path.join(__dirname, '../../', dir);

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
  },
});

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: resolve('src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin({
  verbose: true,
  cleanStaleWebpackAssets: false,
});

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/styles/index.scss',
    './src/assets/index.js',
    './src/index.js',
  ],
  output: {
    filename: isDev ? '[name].js' : '[name].[hash].js',
    path: resolve('dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      _client: resolve('src'),
      _assets: resolve('src/assets/'),
      _styles: resolve('src/styles/'),
      _utils: resolve('src/utils/'),
      _api: resolve('src/api/'),
      _hooks: resolve('src/hooks/'),
      _atoms: resolve('src/components/atoms/'),
      _molecules: resolve('src/components/molecules/'),
      _organisms: resolve('src/components/organisms/'),
      _templates: resolve('src/components/templates/'),
      _pages: resolve('src/components/pages/'),
      _environment: resolve('src/components/environment/'),
      _store: resolve('src/store/'),
      _actions: resolve('src/store/actions/'),
      _reducers: resolve('src/store/reducers/'),
      _thunks: resolve('src/store/thunks/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolve('src')],
      },
      {
        test: /\.css$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: { optimizationLevel: 7 },
              pngquant: { quality: [0.75, 0.90], speed: 3 },
              mozjpeg: { progressive: true },
              gifsicle: { interlaced: false },
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 8192,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'icons/[name].[ext]' },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' },
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    WebpackDefinePluginConfig,
    CleanWebpackPluginConfig,
  ],
  performance: {
    hints: false,
  },
};
