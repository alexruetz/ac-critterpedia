<template>
  <div class="bg-gray-200" :class="{ 'bg-green-200': isAvailable() }">
    <div class="grid grid-cols-2">
      <span>{{ item.name }}</span>
      <button @click="check(item)">
        <span v-if="isCatched">Uncheck</span>
        <span v-if="!isCatched">Check</span>
        </button>
      <span
        class="text-xs col-span-2 text-center cursor-pointer"
        @click="this.showMonths = !this.showMonths"
        >Show Months</span
      >
    </div>
    <transition>
      <div class="grid grid-cols-4 text-xs" v-if="this.showMonths">
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(0) }">
          Januar
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(1) }">
          Februar
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(2) }">
          März
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(3) }">
          April
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(4) }">
          Mai
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(5) }">
          Juni
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(6) }">
          Juli
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(7) }">
          August
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(8) }">
          September
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(9) }">
          Oktober
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(10) }">
          November
        </div>
        <div class="bg-gray-400" :class="{ 'bg-green-500': getMonths(11) }">
          Dezember
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Item",
  inject: { store: "store" },
  data() {
    return {
      showMonths: false,
      isCatched: false,
    };
  },
  props: {
    item: JSON,
    type: String,
  },
  mounted() {
    this.isCatched = this.store.actions.isCatched(this.getId());
  },
  methods: {
    isAvailable: function () {
      var d = new Date();
      return this.getMonths(d.getMonth());
    },
    getMonths: function (bitIndex) {
      if (this.store.actions.isNorthern()) {
        if (this.item.months_northern == 0) {
          return true;
        }
        return (this.item.months_northern & (1 << bitIndex)) === 0 ? 0 : 1;
      } else {
        if (this.item.months_southern == 0) {
          return true;
        }
        return (this.item.months_southern & (1 << bitIndex)) === 0 ? 0 : 1;
      }
    },
    check: function () {
      var id = this.getId();
      this.isCatched = this.store.actions.check(id);
    },
    getId: function () {
      return this.type + "-" + this.item.id;
    },
  },
};
</script>