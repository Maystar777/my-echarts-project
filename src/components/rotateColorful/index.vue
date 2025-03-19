<!--
描述: 旋转多彩图
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
    // 提示框组件，鼠标悬浮展示
    tooltip: {
      trigger: 'item', // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中
      formatter: '{a} <br/>{b} : {c} ({d}%)' //{a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
    },
    legend: {
      show: true,
      orient: 'vertical',
      left: 'center',
      top: 'middle',
      data: ['内存', '存储'],
      textStyle: {
        color: '#4ce5ff',
        fontSize: 14
      },
      itemWidth: 20,
      itemHeight: 10
    },
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    series: [
      {
        name: '磁盘空间',
        type: 'pie',
        radius: [47, 90],
        center: ['50%', '50%'],
        roseType: 'area', //'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
        label: {
          show: false
        },
        data: [
          {
            value: 6.5,
            name: '内存',
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#387ed3'
                },
                {
                  offset: 1,
                  color: '#bc8b68'
                }
              ])
            }
          },
          {
            value: 3.5,
            name: '存储',
            itemStyle: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#188bfd'
                },
                {
                  offset: 1,
                  color: '#51eeff'
                }
              ])
            }
          },
          {
            value: 0,
            name: '其他',
            itemStyle: {
              color: 'rgba(0, 0, 0, 0)'
            }
          },
          {
            value: 0,
            name: '其他1',
            itemStyle: {
              color: 'rgba(0, 0, 0, 0)'
            }
          },
          {
            value: 0,
            name: '其他2',
            itemStyle: {
              color: 'rgba(0, 0, 0, 0)'
            }
          },
          {
            value: 0,
            name: '其他3',
            itemStyle: {
              color: 'rgba(0, 0, 0, 0)'
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
    <div class="sn-title">旋转多彩图</div>
    <div class="pie">
      <div class="pies pie1"></div>
      <div class="pies pie2"></div>
      <div class="pies pie3"></div>
      <div class="pie4"></div>
    </div>
    <BaseChart :height="height" :options="chartOptions" />
  </div>
</template>

<style lang="scss" scoped>
.sn-container {
  position: relative;
}
.pie {
  position: absolute;
  width: 100%;
  height: 83%;
  margin: 0 auto;
  .pies {
    width: 100%;
    height: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .pie1 {
    background-image: url(../../assets/img/bg-circle.png);
    animation: clockwise 20s linear infinite;
    -webkit-animation: clockwise 20s linear infinite;
  }
  .pie2 {
    background-image: url(../../assets/img/bg-circle2.png);
    animation: counterclockwise 20s linear infinite;
    -webkit-animation: counterclockwise 20s linear infinite;
  }
  .pie3 {
    background-image: url(../../assets/img/bg-circle3.png);
    background-size: auto 50%;
  }
}

@keyframes clockwise {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes counterclockwise {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
