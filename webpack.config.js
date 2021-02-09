var path = require("path");

module.exports = {
  mode: "production",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    globalObject: "this",
    library: "vnStr",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
    ],
  },
};
