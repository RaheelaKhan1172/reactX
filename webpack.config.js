const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./main.tsx",
  output: {
    filename:"bundle.js",
    path:__dirname + "/dist"
  },

  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  context: __dirname + "/src",

  devtool:"source-map",
  module: {
    rules: [
      {
        test:/\.tsx?$/,
        use: [
          { loader: "atomic-loader"},
          { loader: "babel-loader" },
          { loader:  "awesome-typescript-loader" }
        ],
        exclude: [path.resolve(__dirname, "/tests"), ".jestrc"],
        include: __dirname + "/src"
      },
      {
        test: /\.scss$/, loaders:["style-loader","css-loader","sass-loader"]
      },
      {
        enforce:"pre",
        test:/\.js$/,
        use:"source-map-loader",
        exclude:[path.resolve(__dirname, "preprocessor.js"),path.resolve(__dirname, "node_modules/"),path.resolve(__dirname, "tests")]
      },
    ]
  },

  externals: {
    "react":"React",
    "react-dom": "ReactDOM"
  }
}
