<!--
描述: 仪表盘
作者: huangyuhui
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseChart from '../BaseChart/index.vue'

const chartOptions = ref({})
const timer = ref(0)
const height = ref<string | number>(230)
const data = ref<{ value: number; name: string }[]>([
  {
    value: 40,
    name: 'km/h'
  }
])

function getEchart() {
  let option = {
    tooltip: {
      formatter: '{a} <br/>{c} {b}'
    },
    series: [
      {
        name: '速度',
        type: 'gauge',
        min: 0,
        max: 220,
        splitNumber: 11,
        radius: '100%',
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: [
              [0.09, 'lime'],
              [0.82, '#1e90ff'],
              [1, '#ff4500']
            ],
            width: 3,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {
          // 坐标轴小标记
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        },
        axisTick: {
          // 坐标轴小标记
          length: 10, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: 'auto'
            // shadowColor: '#fff', //默认透明
            // shadowBlur: 10
          }
        },
        splitLine: {
          // 分隔线
          length: 20, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          // itemStyle: {
          //   shadowColor: '#fff', //默认透明
          //   shadowBlur: 5
          // }
        },
        title: {
          // text: '车速',
          show: true,
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 20,
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {
          // backgroundColor: 'rgba(30,144,255,0.8)',
          // borderWidth: 1,
          // borderColor: '#fff',
          // shadowColor: '#fff', //默认透明
          // shadowBlur: 5,
          offsetCenter: [0, '50%'], // x, y，单位px
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 25,
            color: '#fff'
          }
        },
        data: data.value
      }
    ]
  }

  chartOptions.value = { ...chartOptions.value, ...option }

  timer.value = setInterval(() => {
    data.value[0].value = +(Math.random() * 220).toFixed(0)
  }, 2000)
}

// 生命周期钩子
onMounted(() => {
  getEchart()
})
</script>

<template>
  <div class="sn-container">
    <div class="sn-title">仪表盘</div>
    <BaseChart :height="height" :options="chartOptions" />
  </div>
</template>

<style lang="scss" scoped></style>
