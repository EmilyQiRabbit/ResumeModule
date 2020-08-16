const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SkeletonPlugin } = require("page-skeleton-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const OPT_PREFIX = {
  Browserslist: [
    "Chrome >= 20",
    "Firefox >= 10",
    "ie >= 9",
    "iOS >= 8",
    "Opera >= 10",
    "Safari >= 8",
    "Android >= 4",
    "UCAndroid >= 11"
  ]
};

const LOADER_CSS = [
  // {
  //   loader: require('mini-css-extract-plugin').loader,
  //   options: { sourceMap: true },
  // },
  { loader: require.resolve("style-loader") },
  { loader: require.resolve("css-loader"), options: { sourceMap: true } },
  {
    loader: require.resolve("postcss-loader"),
    options: {
      sourceMap: true,
      plugins: [
        require("postcss-import")(),
        require("autoprefixer")(OPT_PREFIX),
        require("cssnano")({
          preset: [
            "default",
            {
              discardComments: { removeAll: true }
            }
          ]
        })
      ].filter(Boolean)
    }
  }
];

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

const loadConfig = (options = {}) => {
  const webpackConfig = {
    devtool: "source-map", // 生成 source-map 文件
    mode: "development",
    resolve: {
      // Configure how modules are resolved.
      extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json"],
      modules: ["node_modules"],
      alias: {
        "@pages": path.resolve(__dirname, "./client/pages"),
        "@components": path.resolve(__dirname, "./client/components"),
        "@style": path.resolve(__dirname, "./client/style"),
        "@images": path.resolve(__dirname, "./client/images")
      }
    },
    entry: ["./client/app.tsx"],
    output: {
      path: path.join(__dirname, "dist/client"),
      filename: "[name].bundle.js"
      // publicPath: `${context}/dist/`,
      // sourceMapFilename: 'map/[file].map',
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: LOADER_TS },
        { test: /\.css$/, use: LOADER_CSS },
        { test: /\.less$/, use: LOADER_CSS.concat(["less-loader"]) },
        { test: /\.js$/, use: "babel-loader" },
        {
          test: /\.(png|jpg|gif|jpeg)$/,
          use: {
            loader: "url-loader",
            options: {
              name: "[hash].[ext]",
              limit: 1000000 // 1000kb
            }
          }
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: false,
          parallel: true,
          sourceMap: true,
          exclude: /latextemplate/,
          uglifyOptions: {
            compress: {
              drop_console: false,
              // FIXME: wait for uglify js resolve this issue
              // https://github.com/mishoo/UglifyJS2/issues/3282
              keep_fargs: true
            },
            mangle: true,
            output: {
              ascii_only: true
            },
            ["sourceMap"]: true,
            ["comments"]: /^!!!/
          }
        })
      ],
      splitChunks: {
        chunks: "all",
        minSize: 30000,
        maxSize: 0,
        minChunks: 2,
        maxAsyncRequests: 6,
        maxInitialRequests: 4,
        automaticNameDelimiter: "~",
        automaticNameMaxLength: 30,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          reactBase: {
            test: module => {
              return /react|redux/.test(module.context);
            }, // 直接使用 test 来做路径匹配，抽离react相关代码
            chunks: "initial",
            name: "reactBase",
            priority: 10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: true,
        options: {
          // eslint 配置
          eslint: {
            emitError: true, // 验证失败，终止
            configFile: ".eslintrc.js"
          }
        }
      }),
      new HtmlWebpackPlugin({
        template: "./server/layout.html"
      }),
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, `./shell`), // the path to store shell file
        staticDir: path.resolve(__dirname, path.join(__dirname, "dist/client")), // the same as the `output.path`
        routes: ["/resume/0"] // Which routes you want to generate skeleton screen
      })
      // new BundleAnalyzerPlugin()
    ]
  };
  return webpackConfig;
};

const config = loadConfig();

module.exports = config;
