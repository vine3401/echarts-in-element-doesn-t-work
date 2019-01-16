<template>
  <div :style="{height:height,width:width}"></div>
</template>

<script>
export default {
  name: "charts",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
  },
  data: function() {
    return {
      chart: null
    };
  },
  mounted: function() {
    this.initChart();
  },
  beforeDestroy: function() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    setOptions: function() {
      this.chart.setOption({
        title: { text: "ECharts 入门示例" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    initChart: function() {
      this.chart = this.$echarts.init(this.$el);
      this.setOptions();
    }
  }
};
</script>

<style scoped>
</style>