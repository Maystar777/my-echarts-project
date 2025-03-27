<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import * as echarts from 'echarts'
import type { EChartsInitOpts, ECharts } from 'echarts'

const props = defineProps<{
  options: EChartsInitOpts
  width?: string | number
  height?: string | number
}>()

const chartRef = ref<HTMLElement>()
let chartInstance: ECharts | null = null
const observer = new ResizeObserver(() => handleResize())

onMounted(() => {
  initChart()
  observer.observe(chartRef.value!)
})

onUnmounted(() => {
  observer.disconnect()
  chartInstance?.dispose()
})

const initChart = async () => {
  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value)
  chartInstance.setOption(props.options)
}

const handleResize = () => {
  chartInstance?.resize()
}

watch(
  () => props.options,
  newVal => {
    chartInstance?.setOption(newVal)
  },
  { deep: true }
)

const parseSize = (size: string | number | undefined) =>
  !size ? '100%' : typeof size === 'number' ? `${size}px` : size

const styleObject = computed(() => ({
  width: parseSize(props.width),
  height: parseSize(props.height)
}))
</script>

<template>
  <div ref="chartRef" :style="styleObject" />
</template>
