<template>
  <div>
    <div class="box1">
      width: 200rpx; <br>
      height: 100rpx;
    </div>
    <div class="box2">
        width: 300rpx; <br>
        height: 100rpx;
    </div>
    <div class="box3">
        width: 200px; <br>
        height: 100px;
    </div>

    <p>可以改变窗口大小，看看效果</p>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
.box1, .box2, .box3
  display flex
  align-items center
  justify-content center
  color white

.box1
  width 200rpx
  height 100rpx
  font-size 016rpx
  background-color red

.box2
  width 300rpx
  height 100rpx
  font-size 016rpx
  background-color orange

.box3
  width 200px
  height 100px
  font-size 16px
  background-color cornflowerblue

</style>
