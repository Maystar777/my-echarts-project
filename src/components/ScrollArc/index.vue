<!--
描述: 滚动弧形线
作者: huangyuhui
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseChart from '../BaseChart/index.vue'
import { graphic } from 'echarts/core'

const chartOptions = ref({})
const height = ref<string | number>(200)

function getEchart() {
  let option = {
    dataset: {
      source: [
        ['x', 'y'], // 维度名称
        [1, 54],
        [2, 86],
        [3, 46],
        [4, 77],
        [5, 96],
        [6, 89],
        [7, 88],
        [8, 23],
        [9, 38],
        [10, 3],
        [11, 66],
        [12, 98]
      ]
    },
    // 提示框
    tooltip: {
      trigger: 'axis',
      showContent: false,
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 1,
              color: '#5d83ff'
            },
            {
              offset: 0,
              color: 'rgba(255, 255, 255, 0)'
            }
          ])
        }
      }
    },
    color: ['#5d83ff'],
    grid: {
      top: 30,
      left: 20,
      right: 30,
      bottom: 20,
      containLabel: true //轴上的数值
    },
    xAxis: {
      type: 'category',
      // data: xData,
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        formatter: '{value} 月'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#999'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      }
    },
    series: [
      {
        name: '人数',
        type: 'line',
        // data: data,
        symbolSize: 10, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          opacity: 0
        },
        emphasis: {
          //鼠标悬停时的样式
          itemStyle: {
            color: '#5d83ff',
            borderColor: '#fff',
            borderWidth: 2,
            opacity: 1
          },
          label: {
            show: true,
            opacity: 1, // 确保标签不透明。因为前面的itemStyle设置了透明度覆盖了这个设置
            color: '#fff',
            fontSize: 20
          }
        },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#5d83ff'
            },
            {
              offset: 1,
              color: 'rgba(0, 0, 0, 0)'
            }
          ])
        },
        smooth: true
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
    <div class="sn-title">滚动弧形线</div>
    <BaseChart :height="height" :options="chartOptions" />
  </div>
</template>

<style lang="scss" scoped></style>
