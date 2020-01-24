const path = require("path")

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",

  // Dev Server
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
}
