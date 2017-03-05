const webpack = require("webpack");

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
        include: __dirname + "/src"
      },
      {
        test: /\.scss$/, loaders:["style-loader","css-loader","sass-loader"]
      },
      {
        enforce:"pre",
        test:/\.js$/,
        use:"source-map-loader",
        exclude:"/node_modules/"
      },
    ]
  },

  externals: {
    "react":"React",
    "react-dom": "ReactDOM"
  }
}
