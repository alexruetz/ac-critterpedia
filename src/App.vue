<template>
  <div class="container mx-auto">
    <div>
      <Hemisphere/>
    </div>
    <div class="grid grid-cols-1 gap-y-20" v-bind:class="{'md:grid-cols-2': !  cardSelected}">
      <transition>
        <div v-if="showFish">
          <Card title="Fish" type="fish" @click-card="toggleFish"/>
        </div>
      </transition>
      <transition>
        <div v-if="showInsect">
          <Card title="Insect" type="insect"/>
        </div>
      </transition>
      <transition>
        <div v-if="showDeepsea" class="md:col-span-2">
          <Card title="Deep-Sea" type="deep-sea"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Hemisphere from './components/Hemisphere.vue'

export default {
  name: 'App',
  components: {
    Card,
    Hemisphere,
  },
  data() {
    return {
      showInsect: true,
      showFish: true,
      showDeepsea: true,
      cardSelected: false
    }
  },
  methods: {
    toggleFish(collapsed) {
      if (collapsed) {
        this.showInsect = true
        this.showDeepsea = true
        this.cardSelected = false
      } else {
        this.showInsect = false
        this.showDeepsea = false
        this.cardSelected = true
      }
    }
  }
  
}
</script>