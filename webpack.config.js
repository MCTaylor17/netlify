const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const favicon = new FaviconsWebpackPlugin("./logo.png");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const cssLoader = [
  {
    loader: "style-loader"
  },
  {
    loader: "css-loader",
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: "[name]_[local]_[hash:base64]",
      sourceMap: true,
      minimize: true
    }
  },
  {
    loader: "postcss-loader"
  }
];

const sassLoader = cssLoader.concat({
  loader: "sass-loader"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: cssLoader
      },
      {
        test: /\.scss$/,
        use: sassLoader
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { useRelativePath: true }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin,autoprefixer,favicon],
  devServer: {
    publicPath: '/',
    historyApiFallback: true
  }
};