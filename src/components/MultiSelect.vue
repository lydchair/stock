<template>
  <div id="select-section" class="pt-0">
    <multiselect
      v-model="stocks"
      tag-placeholder="Add this as new ISIN"
      placeholder="Search or add a ISIN"
      selectLabel=""
      :options="options"
      :multiple="false"
      :taggable="true"
      @tag="addTag"
      @select="selectTag"
      @remove="removeTag"
      deselectLabel="Remove"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapState, mapActions } from "vuex";
export default {
  name: "MultiSelect",
  components: { Multiselect },
  props: {},
  data() {
    return {
      search: ''
    };
  },
  computed: {
    ...mapState(["stocks", "options"])
  },
  methods: {
    ...mapActions(["addNewStock", "removeStock", "addStock"]),
    addTag(tag) {
      // Add new isin in list, show error if already exist
      if (!this.stocks.includes(tag))
        this.addNewStock(tag);
      else
        this.showToast('warning', 'Warning', `ISIN ${tag} is already exist.`)
    },
    selectTag(tag) {
      // select isin from list, show error if already exist
      if (!this.stocks.includes(tag))
        this.addStock(tag);
      else
        this.showToast('warning', 'Warning', `ISIN ${tag} is already exist.`)
    },
    // remove isin from list
    removeTag(tag) {
      this.removeStock(tag);
    },
    // to show notifications
    showToast (variant, title, body) {
      this.$bvToast.toast(body || 'Content', {
        title: title || 'Title',
        variant: variant || 'success',
        solid: true,
      })
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
#select-section {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
}
</style>
