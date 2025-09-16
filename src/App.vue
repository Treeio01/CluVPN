<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped>
</style>
