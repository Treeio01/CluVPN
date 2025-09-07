<script setup>

</script>

<template>
  <div
    class="flex items-center w-full h-full justify-between  1025:max-w-[398px] bg-primary/60 rounded-[60px] py-[22px] gap-[26px] flex-col">
    <span
      class="flex leading-[22px]  p-[10px] font-Golos max-w-[336px] font-semibold text-[23px] text-center text-white ">
      НЕ смогли разобраться или произошла ошибка?
    </span>
    <div class="flex gap-[25px] flex-col w-full bg-panel-blue/82 py-[27px] px-[22px]">
      <span class="text-white leading-[22px] font-Golos text-center font-medium  text-[22px] p-2.5 tracking-[-0.02em]">
        Вы можете найти ответ
        в разделе помощь
        или наша команда поможет
        вам разобраться в любом вопросе
      </span>
    </div>
    <div class="flex flex-col gap-[9px] w-full max-w-[337px]">
      <RouterLink to="/help"
        class="py-4 hover:opacity-75 transition-opacity ease-in-out duration-300 cursor-pointer flex justify-center w-full rounded-[25px] bg-panel-blue/74">
        <span class="text-white font-Golos text-[22px] font-semibold leading-[22px] tracking-[-0.02em]">
          Помощь
        </span>
      </RouterLink>
      <RouterLink to="/support"
        class="py-4 hover:opacity-75 transition-opacity ease-in-out duration-300 cursor-pointer flex justify-center w-full rounded-[25px] bg-panel-blue/74">
        <span class="text-white font-Golos text-[22px] font-semibold leading-[22px]">
          Поддержка
        </span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>