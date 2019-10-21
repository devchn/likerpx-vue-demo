module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-rpx2rem': { // 添加这个插件
      proportion: 0.001, // 比率
      unitPrecision: 5 // 小数位最多5位
    }
  }
}
