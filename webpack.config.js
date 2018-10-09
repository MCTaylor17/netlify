const HtmlWebPackPlugin = require("html-webpack-plugin");

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
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    publicPath: '/',
    historyApiFallback: true
  }
};
