<!--
描述: 动态轮播折线图
作者: huangyuhui
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseChart from '../BaseChart/index.vue'

const chartOptions = ref({})
const xData = ref<{ name: string; value: (string | number)[] }[]>([])
const prevData = ref({ now: new Date(2025, 1, 1), value: Math.random() * 300 })
const height = ref<string | number>(250)
const timer = ref(0)

function randomData() {
  const oneDay = 24 * 3600 * 1000 // 一天的毫秒数
  let now = new Date(+prevData.value.now + oneDay) // 更新日期
  let value = prevData.value.value + (Math.random() * 25 - 10) // 更新随机值
  prevData.value = { now, value }
  // 返回格式化后的数据
  return {
    name: now.toString(),
    value: [
      `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`, // 使用模板字符串格式化日期
      Math.round(value)
    ]
  }
}

function getEchart() {
  for (let i = 0; i < 100; i++) {
    xData.value.push(randomData())
  }
  let option = {
    tooltip: {
      trigger: 'axis',
      // 坐标轴刻度指示器
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    grid: {
      top: '15%',
      left: '3%',
      right: '12%',
      bottom: '5%',
      containLabel: true
    },
    color: ['#b54c5d'],
    xAxis: {
      type: 'time', // 时间轴，连续
      name: '年-月-日',
      // boundaryGap: false,
      splitNumber: 5, //坐标轴的分割段数
      axisLabel: {
        formatter(value: string) {
          let date = new Date(value)
          return (
            date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDate()
          )
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#2867a8'
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      scale: true, //脱离 0 值比例。
      name: '比特币（美元）',
      min: 0,
      // boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#2867a8'
        }
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: '实时交易',
        type: 'line',
        itemStyle: {
          opacity: 0
        },
        data: xData.value,
        smooth: true
      }
    ]
  }

  chartOptions.value = { ...chartOptions.value, ...option }

  timer.value = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      xData.value.shift()
      xData.value.push(randomData())
    }
  }, 2000)
}

// 生命周期钩子
onMounted(() => {
  getEchart()
})
</script>

<template>
  <div class="sn-container">
    <div class="sn-title">动态轮播折线图</div>
    <BaseChart :height="height" :options="chartOptions" />
  </div>
</template>

<style lang="scss" scoped></style>
