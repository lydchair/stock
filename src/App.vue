<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Dashboard
  }
};
</script>

<style>
body {
  color: #66615b;
  font-size: 14px;
  font-family: 'Muli', Arial, sans-serif !important;
}
</style>
