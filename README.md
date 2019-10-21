[likerpx](https://github.com/devchn/likerpx) 库例子代码

# 在 vue 项目上使用 likerpx

#### 安装

在命令行上运行
```
npm install --save likerpx
npm install --save-dev postcss-rpx2rem
```

在 .postcssrc.js 或 postscs.config.js 文件上添加 postcss-rpx2rem 插件
```
module.exports = {
  'plugins': {
    'postcss-rpx2rem': { // 添加这个插件
      proportion: 0.001, // rpx 到 rem 的转换比例
      unitPrecision: 5 // rem 的小数位位数
    }
  }
}
```

这个 proportion 和 unitPrecision 的设定跟下面的 rate 配置参数一致即可。也就是说：

rate="1000"时，proportion=0.001，unitPrecision=5;

rate="10000"时，proportion=0.0001,unitPrecision=6。

具体看[参数详解](#%e5%8f%82%e6%95%b0%e8%af%a6%e8%a7%a3)的 rate


#### 引入

在 main.js 中引入
```
import 'likerpx'
```

#### 使用

使用方式跟小程序的 rpx 一模一样，效果也一模一样
```
<template>
  <div id="app">
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
.box
  width 100rpx
  height 100rpx
  background-color red
</style>
```

#### 配置

在 `<html>` 标签上进行配置，例如：

```
<!DOCTYPE html>
<html lang="en" max-width="750" rate="1000">
</html>
```