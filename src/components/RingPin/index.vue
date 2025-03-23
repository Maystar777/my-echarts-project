<!--
描述: 环形气泡图
作者: huangyuhui
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseChart from '../BaseChart/index.vue'
import { graphic } from 'echarts/core'

const chartOptions = ref({})
const height = ref<string | number>(230)
function createSeries(options: {
  name: string
  radius: Array<string>
  linearGradient: Array<string>
  value: number
  bgColor: string
}) {
  const { name, radius, linearGradient, value, bgColor } = options
  return {
    name,
    type: 'pie',
    clockWise: false, // 饼图的扇区是否是顺时针排布。
    startAngle: 0, //起始角度
    hoverAnimation: false,
    radius, // [内半径，外半径]
    center: ['40%', '30%'], // 圆心坐标
    label: {
      show: false // 不显示标签
    },
    labelLine: {
      show: false // 关闭标签的视觉引导线
    },
    data: [
      {
        value: 300,
        itemStyle: {
          color: 'rgba(0, 0, 0, 0)'
        }
      },
      {
        name,
        value,
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: linearGradient[0]
            },
            {
              offset: 1,
              color: linearGradient[1]
            }
          ])
        },
        emphasis: {
          label: {
            show: true,
            color: '#fff'
          },
          labelLine: {
            show: true,
          }
        }
      },
      {
        value: 300 - value,
        itemStyle: {
          color: bgColor
        }
      }
    ]
  }
}
function getEchart() {
  let option = {
    //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。
    color: [
      '#05bbdf',
      '#1170e1',
      '#1b40e3',
      '#00c86c',
      '#5e51e3',
      '#ff9235',
      '#fef51e',
      '#399632'
    ],
    legend: {
      show: true,
      orient: 'vertical',
      left: '75%', //未设置会居中
      top: 'middle',
      data: [
        '2020年',
        '2019年',
        '2018年',
        '2017年',
        '2016年',
        '2015年',
        '2014年',
        '2013年'
      ],
      textStyle: {
        color: '#fff',
        fontSize: 10
      },
      itemWidth: 20,
      itemHeight: 10
    },
    series: [
      createSeries({
        name: '2020年',
        radius: ['85%', '90%'],
        linearGradient: ['#0a49c2', '#13adc5'],
        value: 270,
        bgColor: '#053f67'
      }),
      createSeries({
        name: '2019年',
        radius: ['75%', '80%'],
        linearGradient: ['#0c388d', '#137ff6'],
        value: 180,
        bgColor: '#062d67'
      }),
      createSeries({
        name: '2018年',
        radius: ['65%', '70%'],
        linearGradient: ['#05247a', '#183cd7'],
        value: 180,
        bgColor: '#0c266a'
      }),
      createSeries({
        name: '2017年',
        radius: ['55%', '60%'],
        linearGradient: ['#064d9d', '#00b977'],
        value: 210,
        bgColor: '#03414f'
      }),
      createSeries({
        name: '2016年',
        radius: ['45%', '50%'],
        linearGradient: ['#133389', '#5e51e3'],
        value: 150,
        bgColor: '#142868'
      }),
      createSeries({
        name: '2015年',
        radius: ['35%', '40%'],
        linearGradient: ['#2a54a4', '#ff900e'],
        value: 150,
        bgColor: '#373546'
      }),
      createSeries({
        name: '2014年',
        radius: ['25%', '30%'],
        linearGradient: ['#5a847f', '#e3de24'],
        value: 50,
        bgColor: '#35483f'
      }),
      createSeries({
        name: '2013年',
        radius: ['15%', '20%'],
        linearGradient: ['#38828a', '#61ac62'],
        value: 50,
        bgColor: '#0f3541'
      })
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
    <div class="sn-title">环形气泡图</div>
    <BaseChart :height="height" :options="chartOptions" />
  </div>
</template>

<style lang="scss" scoped></style>
