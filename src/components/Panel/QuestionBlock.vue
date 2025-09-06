<script setup>

import Questions from "./Questions.vue";

defineProps({
  questions: Object,
  title: String,
})
</script>

<template>
  <div :class="title != 'Частые вопросы' ? 'items-center' : ''" class="flex  flex-col py-[31px] px-[49px] w-full gap-6 bg-panel-blue/70 rounded-[60px]">
            <span class="text-white p-2.5 font-Inter font-bold text-[30px]">
              {{ title }}
            </span>

    <Questions :questions="questions"/>
    <div class="flex gap-2 items-center  w-full">
              <span class="text-[#B2B2B2] p-2.5 font-Golos text-[18px] leading-normal tracking-[-0.02em]">
                Остались вопросы? Найди свой ответ тут →
              </span>
      <button
          class="bg-primary  w-full hover:opacity-75 transition-opacity ease-in-out duration-300 cursor-pointer rounded-[25px] w-full flex items-center justify-center py-4.5">
                <span class="text-white font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                  Смотреть
                </span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>