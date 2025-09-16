<template>
  <div
    class="flex relative w-full px-[30px] mobile:px-[53px] 1025:px-[83px] items-center justify-between py-3 pt-[51px] mobile:pt-[40px] 1025:pt-[22px]">
    <img
      src="../../assets/img/logo.svg"
      class="max-w-[124px] mobile:max-w-165px"
      alt=""
      data-aos="fade-down"
      data-aos-duration="700"
    />
    <ul
      class="w-full 1025:flex hidden max-w-[541px] rounded-[15px] border border-white/40 hover:border-primary duration-300 ease-in-out transition-colors py-1 items-center justify-center gap-2.5"
      data-aos="fade-down"
      data-aos-delay="150"
      data-aos-duration="700"
    >
      <a
        href="#conditions"
        class="py-2 px-4 font-Inter font-bold text-sm text-white tracking-0 leading-[20px] hover:text-primary transition-color ease-in-out duration-300"
       
      >
        Преимущества
      </a>
      <a
        href="#prices"
        class="py-2 px-4 font-Inter font-bold text-sm text-white tracking-0 leading-[20px] hover:text-primary transition-color ease-in-out duration-300"
        
      >
        Тарифы
      </a>
      <a
        href="#faq"
        class="py-2 px-4 font-Inter font-bold text-sm text-white tracking-0 leading-[20px] hover:text-primary transition-color ease-in-out duration-300"
        
      >
        Вопросы
      </a>
    </ul>
    <div
      class="gap-4 items-center 1025:flex hidden"
      data-aos="fade-down"
      data-aos-delay="250"
      data-aos-duration="700"
    >
      <button
        class="bg-transparent py-2 px-4 rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors ease-in-out duration-300"
       
      >
        <span class="text-white font-Inter font-medium text-sm tracking-0 leading-[20px]">
          Поддержка
        </span>
      </button>
      <RouterLink
        to="/login"
        class="bg-primary py-2 px-4 rounded-[11px] cursor-pointer hover:bg-transparent border-primary border-2 transition-colors ease-in-out duration-300"
        
      >
        <span class="text-white font-Inter font-medium text-sm tracking-0 leading-[20px]">
          Войти
        </span>
      </RouterLink>
    </div>
    <!-- важно: чтобы absolute меню позиционировалось от этого блока -->
    <button @click="openMenu" class="py-1.5 px-1.5 mobile:px-[9px] 1025:hidden flex cursor-pointer"
      :aria-expanded="isOpen" aria-controls="mobile-menu">
      <img src="../../assets/img/menu.svg" class="max-w-[32px] max-h-[26px] mobile:max-w-[49px] mobile:max-h-[34px]"
        alt="Открыть меню" />
    </button>

    <!-- Плавное раскрытие контейнера меню -->
    <Transition enter-active-class="transition duration-250 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-95">
      <!-- Используем v-if, чтобы пункты заново монтировались и каждый раз проигрывали анимацию -->
      <div v-if="isOpen" id="mobile-menu"
        class="flex z-50 w-full max-w-[calc(100%-50px)] mobile:max-w-[calc(100%-50px)] bg-[#D9D9D9] rounded-[40px] right-[25px] top-[40px] fixed flex-col gap-[35px] mobile:px-[90px] px-[36px] py-[35px] pb-[42px] mobile:pb-[51px] origin-top"
        @keydown.esc="closeMenu" @click="onMenuClick">
        <button class="cursor-pointer absolute right-[30px] top-[20px]" @click="closeMenu" aria-label="Закрыть меню">
          <span class="text-primary text-[38px]"> ✕ </span>
        </button>

        <!-- Кнопка Войти (без ширинной анимации, просто fade/scale у контейнера) -->
        <div class="flex py-2 w-max px-[50px] rounded-[10px] bg-[#006BD0]">
          <span class="text-white font-Golos text-[17px]"> Войти </span>
        </div>

        <!-- Пункты с анимацией «от 0 до нужной ширины» -->
        <div class="flex flex-col gap-6">
          <a href="#advantages"
            class="flex cursor-pointer hover:opacity-75 transition-opacity ease-in-out duration-300 py-2 w-full max-w-[276px] mobile:max-w-[605px] px-[50px] rounded-[10px] bg-primary link-grow"
            style="animation-delay: 40ms">
            <span class="text-white font-Golos text-[17px]"> Преимущества </span>
          </a>
          <a href="#prices"
            class="flex cursor-pointer hover:opacity-75 transition-opacity ease-in-out duration-300 py-2 w-full max-w-[230px] mobile:max-w-[501px] px-[50px] rounded-[10px] bg-primary link-grow"
            style="animation-delay: 100ms">
            <span class="text-white font-Golos text-[17px]"> Тарифы </span>
          </a>
          <a href="#faq"
            class="flex cursor-pointer hover:opacity-75 transition-opacity ease-in-out duration-300 py-2 w-full max-w-[200px] mobile:max-w-[389px] px-[50px] rounded-[10px] bg-primary link-grow"
            style="animation-delay: 160ms">
            <span class="text-white font-Golos text-[17px]"> Вопросы </span>
          </a>
        </div>

        <a href="" class="text-[#3B3B3B] text-[20px]">
          Поддержка
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)

const openMenu = () => { isOpen.value = true }
const closeMenu = () => { isOpen.value = false }

// Закрытие по клику вне меню (приятное дополнение)
const onClickOutside = (e) => {
  const menu = document.getElementById('mobile-menu')
  if (!menu) return
  if (!menu.contains(e.target) && !e.target.closest('button[aria-controls="mobile-menu"]')) {
    closeMenu()
  }
}
const onMenuClick = (e) => {
  const link = e.target.closest('a[href]');
  if (link) closeMenu();
};

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
/* Анимация «ширина от 0 до auto» без измерений — через scaleX */
@keyframes linkGrow {
  from {
    transform: scaleX(0);
    opacity: 0;
  }

  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

.link-grow {
  transform-origin: left center;
  animation: linkGrow .35s ease-out both;
  will-change: transform, opacity;
}
</style>
