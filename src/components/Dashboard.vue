<template>
  <div class="dashboard">
    <div class="wrapper">
      <Sidebar />
      <div class="main-panel">
        <b-row class="row row pt-4 pl-3 pb-2 m-0">
          <b-col>
            <h3 class="navbar-title">WatchList</h3>
          </b-col>
        </b-row>
        <hr />
        <b-row v-show="$store.state.stocks.length == 0" class="row row pt-3 m-0 pl-3">
          <b-col>
            <h3 class="navbar-title" style="font-size:24px;">Stock Dashboard</h3>
          </b-col>
        </b-row>
        <StockList class="content"/>
        <Connection />
      </div>
    </div>
  </div>
</template>

<script>
import StockList from "@/components/StockList.vue";
import Connection from "@/components/Connection.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Dashboard",
  components: {
    StockList,
    Connection,
    Sidebar
  }
};
</script>
<style scoped>
body .wrapper {
  min-height: 100vh;
  position: relative;
}
.wrapper {
  position: relative;
  top: 0;
  height: 100vh;
}
.navbar-title {
  font-weight: 600;
  margin: 5px 0px;
  font-size: 14px;
  color: #66615b;
  text-transform: uppercase;
}
</style>
