const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  build: path.join(__dirname, '..', 'dist'),
  translations: path.join(__dirname, '..', 'app', 'translations')
};

module.exports = {
  entry: {
    'main-index': './app/bundles/main-index.jsx',
    'cms/cms-index': './app/bundles/cms-index.jsx'
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: './dist',
    publicPath: `http://localhost:4000/`,
    port: 4000,
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: '/index.html'
        },
        {
          from: /^\/administration-panel/,
          to: '/cms/index.html'
        }
      ]
    },
    proxy: {
      '/rest': {
        target: '/api',
        secure: false,
        changeOrigin: true,
        headers: {
          'User-Agent': 'Webpack-dev-server'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      title: 'CMS-NODE main',
      template: 'app/index.html',
      chunks: ['main-index'],
      filename: 'index.html',
      buildTimestamp: Date.now(),
      inject: true,
      hash: true
    }),
    new HtmlWebpackPlugin({
      title: 'CMS-NODE cms panel',
      template: 'app/index.html',
      chunks: ['cms/cms-index'],
      filename: 'cms/index.html',
      buildTimestamp: Date.now(),
      inject: true,
      hash: true
    }),
    new WebpackMd5Hash(),
    new CopyWebpackPlugin([
      {
        from: PATHS.translations,
        to: path.join(PATHS.build, 'lang')
      }
    ])
  ]
};
