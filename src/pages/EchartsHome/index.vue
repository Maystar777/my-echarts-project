<script setup lang="ts">
import ScrollArc from '@/components/ScrollArc/index.vue'
import SzBar from '@/components/SzBar/index.vue'
import RingPin from '@/components/RingPin/index.vue'
import RotateColorful from '@/components/RotateColorful/index.vue'
import ColorfulRadar from '@/components/ColorfulRadar/index.vue'
</script>

<template>
  <div class="echarts-home">
    <div class="page-title">
      Echarts 统计图表示例
    </div>
    <div class="wrap">
      <ScrollArc class="flex-item-2" />
      <SzBar class="flex-item-2" />
      
      <RingPin class="flex-item-4" />
      <RotateColorful class="flex-item-4" />
      <ColorfulRadar class="flex-item-4" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.echarts-home {
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100%;
  min-width: 100%;
  background: url(../../assets/img/bj.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 0;
  background-color: rgb(0, 0, 0);
  .page-title {
    font-size: 24px;
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }
  .wrap {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  $divide-parts: 2, 3, 4; // 预定义需要生成的数值
  @each $value in $divide-parts {
    .flex-item-#{$value} {
      width: calc(100% / $value - 15px); // 根据数值动态计算样式
    }
  }

  @media (max-width: 800px) {
    .flex-item-2,
    .flex-item-3 {
      width: calc(100% - 10px); /* 在小屏幕上，子元素占满一行 */
    }
  }
  @media (max-width: 1000px) and (min-width: 700px) {
    .flex-item-4 {
      width: calc(100% / 2 - 15px); /* 在中等屏幕上，子元素占满1/2 */
    }
  }
  @media (max-width: 700px) {
    .flex-item-4 {
      width: calc(100% - 10px); /* 在小屏幕上，子元素占满一行 */
    }
  }
}
</style>
