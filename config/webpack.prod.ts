import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import "webpack-dev-server";

const prodConfig: Configuration = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
  },
});

export default prodConfig;
