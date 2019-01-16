<template>
  <div>
    <el-tabs type="card" v-model="tabItem" lazy="true">
      <el-tab-pane label="tab1" name="tab1">
        <h1>tab1</h1>
        <charts>tab1</charts>
      </el-tab-pane>
      <el-tab-pane label="tab2" name="tab2">
        <h1>tab2</h1>
        <charts>tab2</charts>
      </el-tab-pane>
      <el-tab-pane label="tab3" name="tab3">
        <h1>tab3</h1>
        <charts>tab3</charts>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import charts from "@/components/charts";
export default {
  name: "index2",
  components: {
      charts
  },
  data(){
      return {
        tabItem: "tab1"
      }
  }
};
</script>

<style>
</style>
