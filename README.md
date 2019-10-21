# 安装

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
      proportion: 0.001, // 比率
      unitPrecision: 5 // 小数位最多5位
    }
  }
}
```

>这个proportion的设定跟下面的rate配置参数一致即可。也就是说，rate="1000"时，这个设置为 0.001;rate="10000"时，这个设置为 0.0001。具体看参数详情

# 引入

在 main.js 中引入
```
import 'likerpx'
```

# 使用

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

# 配置

在 `<html>` 标签上进行配置，例如：

```
<!DOCTYPE html>
<html lang="en" max-width="750" rate="1000">
</html>
```