<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="logo">
        <div class="simple-text">Stock - Streaming</div>
      </div>
      <div class="form-group">
        <Search />
      </div>
      <ul class="nav">
        <li class="nav-item" v-for="(stock, inx) in stocks" :key="inx">
          <a href="javascript:void(0)" class="nav-link">
            <b-icon-dash
              variant="light"
              class="icons rounded-circle bg-danger p-2"
              font-scale="2"
              scale="1.75"
              @click="removeStock(stock)"
            ></b-icon-dash>
            <p>{{stock}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Search from "@/components/Search.vue";
export default {
  name: "Sidebar",
  components: { Search },
  data() {
    return {};
  },
  computed: {
    ...mapState(["stocks"])
  },
  methods: {
    ...mapActions(["removeStock"])
  }
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-size: cover;
  background-position: center center;
}
.sidebar .sidebar-wrapper {
  background-color: #212120;
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  box-shadow: inset -1px 0px 0px 0px #ddd;
}
.sidebar {
  width: 260px;
  display: block;
  font-weight: 200;
}
.sidebar .logo {
  padding: 13px 0;
  margin: 0 20px;
}
.sidebar .logo p {
  float: left;
  font-size: 20px;
  margin: 10px 10px;
  line-height: 20px;
}
.sidebar .logo .simple-text {
  padding: 4px 0px;
  display: block;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  line-height: 40px;
  text-align: left;
  color: white;
}
.sidebar .nav .nav-item {
  width: 100%;
}
.sidebar .nav .nav-item .nav-link {
  margin: 10px 0px;
  opacity: 0.7;
  padding: 0rem 2rem;
}
.sidebar .nav .nav-item:hover > .nav-link {
  opacity: 1;
}
.sidebar .nav p {
  margin: 0;
  line-height: 30px;
  font-size: 14px;
  font-weight: 600;
  cursor: default;
  text-transform: uppercase;
}
.main-panel {
  background-color: #f4f3ef;
  position: relative;
  z-index: 2;
  float: right;
  width: calc(100% - 260px);
  min-height: 100%;
  overflow: auto;
}
.main-panel > .content {
  min-height: calc(100% - 123px);
}
.sidebar,
.main-panel {
  -webkit-transition-property: top, bottom;
  transition-property: top, bottom;
  -webkit-transition-duration: 0.2s, 0.2s;
  transition-duration: 0.2s, 0.2s;
  -webkit-transition-timing-function: linear, linear;
  transition-timing-function: linear, linear;
  -webkit-overflow-scrolling: touch;
}
.sidebar {
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: hidden;
}
.sidebar .nav .nav-item:not(.active) > .nav-link {
  color: #ffffff;
}
.sidebar .icons {
  float: left;
  margin-right: 15px;
  width: 30px;
  height: 30px;
}
</style>