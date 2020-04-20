<template>
  <div class="connection">
    <span title="Error">
      <b-icon-x
        v-show="error"
        variant="light"
        class="rounded-circle bg-danger p-2"
        font-scale="1.05"
      ></b-icon-x>
    </span>
    <span title="Connected">
      <b-icon-check
        title="Check"
        v-show="connected"
        variant="light"
        class="rounded-circle bg-success p-2"
        font-scale="1.05"
      ></b-icon-check>
    </span>
    <span title="Connecting...">
      <b-icon-arrow-clockwise
        v-show="connecting"
        variant="light"
        class="rounded-circle bg-secondary p-2"
        animation="spin-pulse"
        font-scale="1.05"
      ></b-icon-arrow-clockwise>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Connection",
  computed: {
    ...mapState(["connected", "connecting", "error"])
  }
};
</script>

<style scoped>
.connection {
  position: absolute;
  bottom: 5px;
  right: 8px;
  font-size: 2.25rem;
}
</style>