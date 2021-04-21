<template>
  <div class="container mx-auto">
    <Card title="Fish" type="fish"/>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card,
  },
  data() {
    return {
      msg: "asdf"
    }
  }
}
</script>