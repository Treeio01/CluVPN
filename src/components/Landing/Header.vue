<template>
  <div
    class="flex w-full max-w-[1273px] px-[53px] items-center justify-between py-3 mt-[22px]"
  >
    <img src="../../assets/img/logo.svg" class="max-w-[124px] mobile:max-w-165px" alt="" />
    <ul
      class="w-full lg:flex hidden max-w-[541px] rounded-[15px] border border-white/40 hover:border-primary duration-300 ease-in-out transition-colors py-1 items-center justify-center gap-2.5"
    >
      <RouterLink
        to="#"
        class="py-2 px-4 font-Inter font-bold text-sm text-white tracking-0 leading-[20px] hover:text-primary transition-color ease-in-out duration-300"
      >
        Преимущества
      </RouterLink>
      <RouterLink
        class="py-2 px-4 font-Inter font-bold text-sm text-white tracking-0 leading-[20px] hover:text-primary transition-color ease-in-out duration-300"
      >
        Тарифы
      </RouterLink>
      <RouterLink
        class="py-2 px-4 font-Inter font-bold text-sm text-white tracking-0 leading-[20px] hover:text-primary transition-color ease-in-out duration-300"
      >
        Вопросы
      </RouterLink>
    </ul>
    <div class="gap-4 items-center lg:flex hidden">
      <button
        class="bg-transparent py-2 px-4 rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors ease-in-out duration-300"
      >
        <span
          class="text-white font-Inter font-medium text-sm tracking-0 leading-[20px]"
        >
          Поддержка
        </span>
      </button>
      <button
        class="bg-primary py-2 px-4 rounded-[11px] cursor-pointer hover:bg-transparent border-primary border-2 transition-colors ease-in-out duration-300"
      >
        <span
          class="text-white font-Inter font-medium text-sm tracking-0 leading-[20px]"
        >
          Войти
        </span>
      </button>
    </div>
    <button class="py-1.5 px-1.5  mobile:px-[9px] lg:hidden flex cursor-pointer ">
      <img src="../../assets/img/menu.svg" class="max-w-[32px] max-h-[26px] mobile:max-w-[49px] mobile:max-h-[34px]" alt="" />
    </button>
  </div>
</template>
<script setup></script>
