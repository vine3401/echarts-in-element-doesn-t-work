<template>
  <div>
    <el-tabs type="card" v-model="tabItem">
      <el-tab-pane label="tab1" name="tab1">
        <h1>tab1</h1>
        <charts v-if="'tab1' === tabItem">tab1</charts>
      </el-tab-pane>
      <el-tab-pane label="tab2" name="tab2">
        <h1>tab2</h1>
        <charts v-if="'tab2' === tabItem">tab2</charts>
      </el-tab-pane>
      <el-tab-pane label="tab3" name="tab3">
        <h1>tab3</h1>
        <charts v-if="'tab3' === tabItem">tab3</charts>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import charts from "@/components/charts";
export default {
  name: "index",
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
