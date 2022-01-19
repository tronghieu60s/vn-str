const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./index.ts",
  output: {
    globalObject: "this",
    library: "vnStr",
    libraryTarget: "umd",
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: { minimize: true },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: "ts-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  plugins: [new CopyWebpackPlugin({ patterns: ["./index.d.ts"] })],
  resolve: { extensions: [".js", ".ts"] },
};
