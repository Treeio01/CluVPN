<script setup>
import Tariff from "./Tariff.vue";

defineProps({
  tariffs: Object
})
</script>

<template>
  <div class="flex w-full flex-col gap-6 px-2.5 ">
    <Tariff v-for="t in tariffs" :tariff="t"/>
  </div>
</template>
<style scoped>

</style>