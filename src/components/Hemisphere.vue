<template>
  <div>
    <multi-button
      :values="this.getValues()"
      :initialValue="this.store.state.hemisphere"
      @change="this.click"
    ></multi-button>
  </div>
</template>
<script>
import MultiButton from "./MultiButton.vue";

const northern = { id: 1, name: "Northern" };
const southern = { id: 2, name: "Southern" };

export default {
  components: { MultiButton },
  name: "Hemisphere",
  inject: { store: "store" },
  methods: {
    getValues: function () {
      return [northern, southern];
    },
    click: function (item) {
      console.log("callback: " + item.id);
      this.store.actions.setHemisphere(item.id)
    },
  },
};
</script>