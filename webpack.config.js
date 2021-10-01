var path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.ts",
  output: {
    globalObject: "this",
    library: "vnStr",
    libraryTarget: "umd",
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: "ts-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
