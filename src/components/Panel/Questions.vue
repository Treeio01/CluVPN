<script setup>
import {ref} from "vue";
import Question from "./Question.vue";

defineProps({
  questions: Object
})

</script>

<template>
  <div class="flex flex-col gap-6 w-full">
    <Question  v-for="(q, i) in questions" :key="i" :question="q" v-model:open="q.open" />
  </div>
</template>

<style scoped>

</style>