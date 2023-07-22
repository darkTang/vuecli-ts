import { VueLoaderPlugin } from "vue-loader";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration, DefinePlugin } from "webpack";

const isDev = process.env.NODE_ENV === "development";
const handleStyleLoaders = [
  isDev ? "style-loader" : MiniCssExtractPlugin.loader,
  "css-loader",
  "postcss-loader",
];

const baseConfig: Configuration = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash:10].js",
    chunkFilename: "js/[name].chunk.[contenthash:10].js",
    assetModuleFilename: "static/[hash][ext][query]",
  },
  resolve: {
    extensions: [".vue", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: handleStyleLoaders,
      },
      {
        test: /\.less$/,
        use: [...handleStyleLoaders, "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|bmp)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|ico|mp3|mp4)/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: "html-loader",
        enforce: "post",
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      },
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
    isDev &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:10].css",
        chunkFilename: "css/[name].chunk.[contenthash:10].css",
      }),
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, "../src"),
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: true,
  },
};

export default baseConfig;
