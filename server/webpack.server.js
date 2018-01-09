const path = require("path");

module.exports = {
  // Inform webpack that we are building a
  // bundle to nodeJS rather than for the browser
  target: "node",

  // Tell webpack where is the entry point
  entry: "./src/index.js",

  // Tell webpack where to put the output file generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
