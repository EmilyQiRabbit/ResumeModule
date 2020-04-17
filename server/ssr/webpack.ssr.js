// const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ReactLoadablePlugin = require("react-loadable/webpack")
  .ReactLoadablePlugin;

const LOADER_TS = [
  {
    loader: require.resolve("ts-loader"),
    options: {
      transpileOnly: true,
      compilerOptions: {
        declaration: false,
        declarationMap: false,
        module: "esnext",
        target: "es5"
      },
      experimentalFileCaching: true
    }
  }
];

const loadConfig = (_options = {}) => {
  const webpackConfig = {
    mode: "production",
    resolve: {
      // Configure how modules are resolved.
      extensions: [".ts", ".tsx"],
      modules: ["../../node_modules"]
    },
    entry: ["./server/ssr/components/Router.tsx"],
    output: {
      path: path.join(__dirname, "./build/node"),
      filename: "ssrClient.js",
      libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: LOADER_TS
        }
      ]
    },
    plugins: [
      new ReactLoadablePlugin({
        filename: path.join(__dirname, "./build/react-loadable.json")
      })
    ]
  };
  return webpackConfig;
};

const config = loadConfig();

module.exports = config;
