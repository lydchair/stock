<template>
  <div class="stocks pt-2">
    <b-container class="bv-example-row">
      <b-row cols="4">
        <b-col v-for="(stock, inx) in stocks" :key="inx">
          <Stock :stock="stock" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Stock from "@/components/Stock.vue";
export default {
  name: "Stocks",
  components: { Stock },
  computed: {
    ...mapState(["stocks"])
  },
  methods: {
    ...mapActions(["removeStock"])
  },
};
</script>
