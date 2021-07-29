<template>
  <div>
    <ul
      class="
        inline-flex
        bg-gray-200
        border-2 border-black
        cursor-pointer
        list-none
      "
    >
      <li
        v-for="(value, index) in values"
        :key="value.id"
        class="pl-2 pr-2 border-black"
        :class="{
          'border-r': index != Object.keys(values).length - 1,
          'bg-gray-400': isSelected(value),
        }"
        @click="click(value)"
      >
        {{ value.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MultiButton",
  inject: { store: "store" },
  data() {
    return {
      selected: Number,
    };
  },
  props: {
    values: Array,
    initialValue: Number,
  },
  mounted() {
    console.log("Initial" + this.initialValue)
    this.selected = this.initialValue;
  },
  methods: {
    isSelected: function (item) {
      return this.selected === item.id;
    },
    click: function (item) {
      this.selected = item.id;
      this.$emit('change', item);
    },
  },
};
</script>