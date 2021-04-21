<template>
    <span>{{item.name}}</span>
    <div class="grid grid-cols-4 text-xs">
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(0)}">Januar</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(1)}">Februar</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(2)}">März</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(3)}">April</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(4)}">Mai</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(5)}">Juni</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(6)}">Juli</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(7)}">August</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(8)}">September</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(9)}">Oktober</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(10)}">November</div>
        <div class="bg-gray-400" :class="{'bg-green-500' : getMonths(11)}">Dezember</div>
    </div>
</template>
<script>
export default {
    name: "Fish",
    props: {
        item: JSON
    },
    methods: {
        getMonths: function(bitIndex) {
            //TODO: Hemisphere Weiche
            if (this.item.months_northern == 0) {
                return true
            }
            return (this.item.months_northern & (1 << bitIndex)) === 0 ? 0 : 1
        }
    }
}
</script>