import { reactive, readonly } from "vue";

const state = reactive({
  checked: [],
  hemisphere: 1
});

export default {
  state: readonly(state),
  actions: {
    loadInitial() {
      var hemisphere = localStorage.getItem("hemisphere");
      if (!isNaN(hemisphere)) {
        var hemisphereInt = parseInt(hemisphere)
        if (hemisphereInt === 1 || hemisphereInt === 2) {
          state.hemisphere = hemisphereInt;
        } else {
          this.setHemisphere(1)
        }
      } else {
        this.setHemisphere(hemisphere);
      }
    },
    addChecked(item) {
      //   state.fnacResults.push(item);
      console.log(item);
    },
    removeChecked(item) {
      //   state.interResults.push(item);
      console.log(item);
    },
    setHemisphere(id) {
      state.hemisphere = id;
      localStorage.setItem("hemisphere", id);
    },
    getHemisphere() {
      return state.hemisphere;
    },
    isNorthern() {
      return state.hemisphere === 1;
    }
  }
};
