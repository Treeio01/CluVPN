<script setup>

import Questions from "./Questions.vue";

defineProps({
  questions: Object,
  title: String,
})
</script>

<template>
  <div :class="title != 'Частые вопросы' ? 'items-center' : ''" class="flex  flex-col py-[20px] md:py-[31px] px-[20px] md:px-[49px] w-full gap-6 bg-panel-blue/70 rounded-[60px]">
            <span class="text-white p-2.5 font-Inter font-bold md:text-[30px] text-xl text-center">
              {{ title }}
            </span>

    <Questions :questions="questions"/>
    <div class="flex gap-2 items-center md:flex-row flex-col w-full">
              <span class="text-[#B2B2B2] p-2.5 font-Golos text-[18px] leading-normal tracking-[-0.02em]">
                Остались вопросы? Найди свой ответ тут →
              </span>
      <RouterLink to="/help"
          class="bg-primary  w-full hover:opacity-75 transition-opacity ease-in-out duration-300 cursor-pointer rounded-[25px] w-full flex items-center justify-center py-4.5">
                <span class="text-white font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                  Смотреть
                </span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>