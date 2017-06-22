import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputPath = path.join(__dirname, 'dist');

export default {
  devtool: false,
  entry: {
    bundle: './src/index.jsx',
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.template.ejs',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`${NODE_ENV}`),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
