<!--
描述: 柱饼组合联动
作者: huangyuhui
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseChart from '../BaseChart/index.vue'

const chartOptions = ref({})
// 定义接口作为ref的泛型
interface DataMap {
  dataJR?: any
  dataZW?: any
  dataYL?: any
  dataIT?: any
}
const dataMap = ref<DataMap>({})
const height = ref<string | number>(250)

function dataFormatter(obj: any) {
  let pList = ['金融类', '政务类', '医疗类', '互联网类']
  let temp
  for (let y = 2016; y <= 2018; y++) {
    let max = 0
    let sum = 0
    temp = obj[y]
    for (let i = 0, l = temp.length; i < l; i++) {
      max = Math.max(max, temp[i])
      sum += temp[i]
      obj[y][i] = {
        name: pList[i],
        value: temp[i]
      }
    }
    obj[y + 'max'] = Math.floor(max / 100) * 100
    obj[y + 'sum'] = sum
  }
  return obj
}

function initData() {
  dataMap.value.dataJR = dataFormatter({
    2018: [118, 128, 207, 265],
    2017: [112, 122, 234, 245],
    2016: [101, 110, 804, 225]
  })

  dataMap.value.dataZW = dataFormatter({
    2018: [855, 987, 959, 207],
    2017: [626, 709, 701, 206],
    2016: [509, 892, 201, 205]
  })

  dataMap.value.dataYL = dataFormatter({
    2018: [179, 405, 668, 305],
    2017: [375, 2886, 276, 205],
    2016: [236, 250, 408, 105]
  })

  dataMap.value.dataIT = dataFormatter({
    2018: [855, 987, 959, 235],
    2017: [626, 709, 701, 225],
    2016: [509, 892, 201, 215]
  })
}

function getOptionsSeries(year: string) {
  let key = year + 'sum'
  let data = [
    {
      name: '金融类',
      value: dataMap.value.dataJR[key],
      itemStyle: {
        color: '#d6d638'
      }
    },
    {
      name: '政务类',
      value: dataMap.value.dataZW[key],
      itemStyle: {
        color: '#00c86c'
      }
    },
    {
      name: '医疗类',
      value: dataMap.value.dataYL[key],
      itemStyle: {
        color: '#07d8ff'
      }
    },
    {
      name: '互联网类',
      value: dataMap.value.dataIT[key],
      itemStyle: {
        color: '#0c71cf'
      }
    }
  ]
  return {
    series: [
      {
        data
      },
      {
        data
      }
    ]
  }
}

function getEchart() {
  let option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        autoPlay: true,
        playInterval: 2000,
        data: ['2016-01-01', '2017-01-01', '2018-01-01'],
        left: 30,
        right: 30,
        label: {
          color: '#D3D6E3',
          formatter(s: string) {
            return new Date(s).getFullYear()
          }
        },
        lineStyle: {
          color: '#179bf1'
        },
        itemStyle: {
          // color: '#004b85',
          borderColor: '#004b85',
          borderWidth: 1,
          shadowColor: 'rgba(1, 216, 225, 0.5)',
          shadowBlur: 5
        },
        // 当前项的图像样式
        checkpointStyle: {
          color: '#01d8ff',
          symbolSize: 10,
          borderColor: 'rgba(1, 216, 255, 0.5)',
          borderWidth: 5
        },
        // 控制按钮的图形样式
        controlStyle: {
          showPlayBtn: false,
          borderColor: '#01bde6',
          itemGap: 20
        },
        // 高亮状态
        emphasis: {
          label: {
            color: '#01d8ff',
            show: false
          },
          checkpointStyle: {
            color: '#01d8ff',
            borderColor: 'rgba(1, 216, 255, 0.5)',
            borderWidth: 5
          },
          controlStyle: {
            borderColor: 'rgba(1, 216, 255, 0.5)'
          },
          itemStyle: {
            color: '#01d8ff',
            borderColor: 'rgba(1, 216, 225, 0.5)',
            borderWidth: 5
          }
        }
      },
      grid: {
        bottom: '30%',
        right: '42%'
      },
      xAxis: [
        {
          type: 'category',
          data: ['金融类', '政务类', '医疗类', '互联网类'],
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#D3D6E3'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '区块链应用（个）',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#D3D6E3'
            }
          }
        }
      ],
      series: [
        {
          name: '联盟链',
          type: 'bar',
          barMaxWidth: 15,
          center: ['20%', '65%'],
          seriesLayoutBy: 'row',
          // 突出显示的点
          markPoint: {
            symbol: 'pin',
            itemStyle: {
              color: '#eb9b44',
              shadowColor: '#eb9b44',
              shadowBlur: 15
            },
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
        },
        {
          name: '应用占比',
          type: 'pie',
          center: ['76%', '20%'],
          radius: '28%',
          z: 100
        }
      ]
    },
    options: [
      getOptionsSeries('2016'),
      getOptionsSeries('2017'),
      getOptionsSeries('2018')
    ]
  }
  chartOptions.value = { ...chartOptions.value, ...option }
}

// 生命周期钩子
onMounted(() => {
  initData()
  getEchart()
})
</script>

<template>
  <div class="sn-container">
    <div class="sn-title">柱饼组合联动</div>
    <BaseChart :height="height" :options="chartOptions" />
  </div>
</template>

<style lang="scss" scoped></style>
