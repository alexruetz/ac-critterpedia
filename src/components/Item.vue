<template>
  <div class="bg-gray-200" :class="{ 'bg-green-200': isAvailable() }">
    <div class="grid grid-cols-2">
      <span>{{ item.name }}</span>
      <button @click="check(item)">Check</button>
    {{ store.state.hemisphere}}
    </div>
    <div class="grid grid-cols-4 text-xs">
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
  </div>
</template>
<script>
export default {
  name: "Item",
  inject: { store: "store" },
  props: {
    item: JSON,
    type: String,
  },
  mounted() {
    if (localStorage.getItem("catched")) {
      var json = JSON.parse(localStorage.getItem("catched"));
      var res = json.filter((x) => {
        x.match(this.getId());
      });
      console.log(res);
    }
  },
  methods: {
    isAvailable: function () {
      var d = new Date();
      return this.getMonths(d.getMonth());
    },
    getMonths: function (bitIndex) {
        console.log("check month: " + bitIndex);
        console.log(this.store.actions.isNorthern());
      //TODO: Hemisphere Weiche
      if (this.store.state.hemisphere === 1) {
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
      var catched = localStorage.getItem("catched");
      var id = this.getId();
      if (catched) {
        catched = JSON.parse(catched);
        var index_of = catched.indexOf(id);
        if (index_of === -1) {
          catched.push(id);
          localStorage.setItem("catched", JSON.stringify(catched));
        } else {
          catched = catched.filter(function (value) {
            return value != id;
          });
          localStorage.setItem("catched", JSON.stringify(catched));
        }
      } else {
        catched = [];
        catched.push(id);
        localStorage.setItem("catched", JSON.stringify(catched));
      }
    },
    getId: function () {
      return this.type + "-" + this.item.id;
    },
  },
};
</script>