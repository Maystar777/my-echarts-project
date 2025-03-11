<!--
描述: 
作者: huangyuhui
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseChart from '../BaseChart/index.vue'
import { graphic } from 'echarts/core'

const chartOptions = ref({})
const height = ref<string | number>(200)

function getEchart() {
  let xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  let yData1 = [9, 12, 15, 18, 15, 12, 9, 12, 15, 18, 15, 12]
  let yData2 = [-9, -12, -15, -18, -15, -12, -9, -12, -15, -18, -15, -12]
  let barWidth = '10%'
  let dataCoord = [
    { coord: [0, 9] },
    { coord: [1, 12] },
    { coord: [2, 15] },
    { coord: [3, 18] },
    { coord: [4, 15] },
    { coord: [5, 12] },
    { coord: [6, 9] },
    { coord: [7, 12] },
    { coord: [8, 15] },
    { coord: [9, 18] },
    { coord: [10, 15] },
    { coord: [11, 12] }
  ]
  let dataCoord2 = [
    { coord: [0, -9] },
    { coord: [1, -12] },
    { coord: [2, -15] },
    { coord: [3, -18] },
    { coord: [4, -15] },
    { coord: [5, -12] },
    { coord: [6, -9] },
    { coord: [7, -12] },
    { coord: [8, -15] },
    { coord: [9, -18] },
    { coord: [10, -15] },
    { coord: [11, -12] }
  ]
  let option = {
    // X轴
    xAxis: {
      // X轴数据
      data: xAxisData,
      // x轴轴线
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(40, 103, 168, 0.3)'
        }
      },
      // X轴刻度线
      axisTick: {
        show: false
      }, // X轴标签
      axisLabel: {
        color: '#999',
        formatter: '{value} 月'
      }
    },
    yAxis: {
      axisLabel: {
        color: '#999'
      },
      axisTick: {
        show: false
      },
      // 坐标轴在 grid 区域中的分隔线。(就是刻度线画得很长，和x轴平行)
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(40, 103, 168, 0.3)'
        }
      }
    },
    grid: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20,
      // 是否包含坐标轴的刻度标签，防止溢出
      containLabel: true
    },
    series: [
      {
        name: '正值柱状图',
        type: 'bar',
        // 堆叠类别
        stack: 'one',
        // 柱状图样式
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 1,
              color: 'rgba(0, 0, 0, 0)'
            },
            {
              offset: 0.5,
              color: '#466e71'
            },
            {
              offset: 0,
              color: '#eb9b44'
            }
          ])
        },
        barWidth: barWidth,
        // 标记点
        markPoint: {
          symbol: 'circle',
          itemStyle: {
            color: '#eb9b44',
            shadowColor: '#eb9b44',
            shadowBlur: 20
          },
          symbolSize: [10, 10], // 容器大小
          symbolOffset: [0, 0], // 位置偏移
          data: dataCoord
        },
        data: yData1,
        emphasis: {
          label: {
            show: true,
            opacity: 1,
            color: '#fff',
            position: 'top'
          }
        }
      },
      {
        name: '负值柱状图',
        type: 'bar',
        stack: 'one',
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0, 0, 0, 0)'
            },
            {
              offset: 0.5,
              color: '#774a75'
            },
            {
              offset: 1,
              color: '#b34d69'
            }
          ])
        },
        barWidth: barWidth,
        markPoint: {
          symbol: 'circle',
          itemStyle: {
            color: '#b34d69',
            shadowColor: '#b34d69',
            shadowBlur: 20
          },
          symbolSize: [10, 10],
          symbolOffset: [0, 0],
          data: dataCoord2
        },
        data: yData2
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
    <div class="sn-title">双轴柱状图</div>
    <BaseChart :options="chartOptions" :height="height" />
  </div>
</template>

<style lang="scss" scoped></style>
