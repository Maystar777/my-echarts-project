<!--
描述: 多彩雷达
作者: huangyuhui
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseChart from '../BaseChart/index.vue'
import { graphic } from 'echarts/core'

const chartOptions = ref({})
const height = ref<string | number>(230)

function getEchart() {
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    radar: {
      indicator: [
        { name: '外观', max: 100 },
        { name: '拍照', max: 100 },
        { name: '系统', max: 100 },
        { name: '性能', max: 100 },
        { name: '屏幕', max: 100 },
        { name: '折叠', max: 100 }
      ],
      radius: '60%', //半径，相对于容器宽高中较小的一项
      center: ['50%', '50%'],
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: true,
        symbol: 'arrow',
        symbolSize: [5, 7.5],
        lineStyle: {
          color: '#1883ff',
          type: 'dashed'
        }
      },
      splitArea: {
        // show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        type: 'radar',
        symbol: 'none', // 标记的图形
        areaStyle: {}, // 区域填充样式
        lineStyle: {
          opacity: 0
        },
        data: [
          {
            value: [35, 50, 30, 30, 40, 45],
            name: '智能手机',
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#9c6b4e'
                },
                {
                  offset: 1,
                  color: '#2a59ac'
                }
              ])
            }
          },
          {
            value: [70, 40, 55, 55, 30, 55],
            name: '5G手机',
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#0855ca'
                },
                {
                  offset: 1,
                  color: '#36a6c7'
                }
              ])
            }
          }
        ]
      }
    ]
  }
  chartOptions.value = { ...chartOptions.value, ...option }
}

// 生命周期钩子
onMounted(() => {
  getEchart()
})
</script>

<template>
  <div class="sn-container">
    <div class="sn-title">多彩雷达</div>
    <BaseChart :height="height" :options="chartOptions" />
  </div>
</template>

<style lang="scss" scoped></style>
