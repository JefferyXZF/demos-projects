const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true, // 开启缓存
        parallel: true, // 多线程
      }),
    ],
  },
};
