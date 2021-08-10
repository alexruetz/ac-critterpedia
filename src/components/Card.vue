<template>
  <div class="w-full">
    <div @click="toggle()">
      <h3 class="text-center font-bold text-3xl">{{ title }}</h3>
      <div class="text-center">
        {{ store.actions.getCheckedCount(type) }}/{{ max }}
      </div>
    </div>
    <transition name="fade">
      <div v-if="!collapsed">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="item in objects" :key="item.id">
            <Item :item="item" :type="type"></Item>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import Item from "./Item.vue";

export default {
  name: "Card",
  inject: { store: "store" },
  components: {
    Item,
  },
  props: {
    title: String,
    type: String,
  },
  data() {
    return {
      max: 0,
      collected: 0,
      objects: null,
      collapsed: true,
    };
  },
  async created() {
    var api_host = process.env.VUE_APP_API_HOST;
    var url = "";
    if (api_host) {
      url = api_host + "/" + this.type;
    } else {
      url = process.env. "/ac-critterpedia/json/" + this.type + ".json";
    }
    console.log("URL: " + url);
    const items = await axios.get(url);
    this.max = Object.keys(items.data).length;
    this.objects = items.data;
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      this.$emit("click-card", this.collapsed);
    },
  },
  emits: ["click-card"],
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
