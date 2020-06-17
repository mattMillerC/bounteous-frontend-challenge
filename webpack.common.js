const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AutoPrefixer = require("autoprefixer");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "index.html",
          to: "."
        },
        {
          from: "img/*",
          to: ".",
          toType: "dir"
        }
      ]
    })
  ],
  entry: [
    __dirname + '/styles/index.scss',
    __dirname + '/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Extract JS to CSS file
          MiniCssExtractPlugin.loader,
          // Translate CSS to JS (resolving imports)
          'css-loader',
          // Add browser prefixes
          { loader: 'postcss-loader', options: { plugins: [ AutoPrefixer ] } },
          // Compile SCSS to CSS
          'sass-loader',
        ],
      },
    ],
  },
};