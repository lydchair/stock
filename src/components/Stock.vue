<template>
  <div class="stock pt-4">
    <b-card header-tag="div">
      <template v-slot:header>
        <div card-header>
          <div :title="stock" class="stock-title">{{ stock }}</div>
        </div>
      </template>
      <template v-if="getStock">
        <b-card-text class="mb-1">
          <b-row>
            <b-col>
              <label>Price</label>
            </b-col>
            <b-col>{{ getStock.price | formatPrice }}</b-col>
          </b-row>
        </b-card-text>
        <b-card-text class="mb-1">
          <b-row>
            <b-col>
              <label>Bid</label>
            </b-col>
            <b-col>{{ getStock.bid | formatPrice }}</b-col>
          </b-row>
        </b-card-text>
        <b-card-text class="mb-1">
          <b-row>
            <b-col>
              <label>Ask</label>
            </b-col>
            <b-col>{{ getStock.ask | formatPrice }}</b-col>
          </b-row>
        </b-card-text>
        <b-card-text class="small text-muted mb-1">Last updated {{ getStock.timestamp | getDate }}</b-card-text>
      </template>
      <template v-else>Loading...</template>
      <b-button pill variant="outline-secondary btn-remove" @click="removeStock(stock)">X</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment/src/moment";

export default {
  name: "Stock",
  props: ["stock"],
  computed: {
    getStock() {
      return this.$store.state.prices[this.stock];
    }
  },
  filters: {
    getDate(date) {
      return moment(date).fromNow();
    },
    getTitle(str) {
      if (str.lenght > 10) {
        return str.substring(0, 10);
      } else {
        return str;
      }
    },
    formatPrice(price) {
      return price.toFixed(2);
    }
  },
  methods: {
    ...mapActions(["removeStock"])
  }
};
</script>

<style scoped>
.btn-remove {
  position: absolute;
  top: 5px;
  right: 4px;
  border-color: rgba(0, 0, 0, 0.125);
}
.stock-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 90%;
}
</style>
