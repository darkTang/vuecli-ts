import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";
import "webpack-dev-server";

const prodConfig: Configuration = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
});

export default prodConfig;
