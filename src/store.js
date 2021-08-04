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
      var checked = localStorage.getItem("catched");
      if (checked) {
        state.checked = JSON.parse(checked)
      } else {
        JSON.stringify(state.checked)
      }

      console.log(state.checked)
      console.log(checked)
    },
    check(item) {
      if (!state.checked.includes(item)) {
        this.addChecked(item)
        return true;
      } else {
        this.removeChecked(item)
        return false;
      }
    },
    addChecked(item) {
      state.checked.push(item);
      this.save()
    },
    save() {
      localStorage.setItem("hemisphere", state.hemisphere);
      localStorage.setItem("catched", JSON.stringify(state.checked));
    },
    removeChecked(item) {
      state.checked.splice(state.checked.indexOf(item), 1)
      this.save();
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
    },
    isCatched(id) {
      return state.checked.includes(id);
    },
    getCheckedCount(type) {
      var t = state.checked.filter(function (x) {
        console.log(x)
        return x.startsWith(type)
      })
      return t.length
    }
  }
};
