<template>
    <div class="w-full">
        <div @click="collapsed = !collapsed">
            <h3 class="text-center font-bold text-3xl">{{title}}</h3>
            <div class="text-center">{{collected}}/{{max}}</div>
        </div>
        <transition>
            <div v-if="!collapsed">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div v-for="item in objects" :key="item.id">
                        <Fish :item=item></Fish>
                    </div>

                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import axios from 'axios'
import Fish from "./Fish.vue"

export default {
  name: 'Card',
  components: {
      Fish
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
          collapsed: true
      }
  },
  async created() {
      const fish = await axios.get(process.env.VUE_APP_API_HOST + "/" + this.type)
      this.max = Object.keys(fish.data).length
      this.objects = fish.data
  },
  methods: {
      sayHi(text) {
          console.log(text)
      },
  },
}
</script>
