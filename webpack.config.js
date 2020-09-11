const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()],
  entry: {
    app: ["./src/App.tsx"]
  },
  output: { filename: "[name].bundle.js" },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: { loader: "awesome-typescript-loader" }
      }
    ]
  }
};
