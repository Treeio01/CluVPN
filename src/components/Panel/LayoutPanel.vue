<template>
  <div class="flex w-full gap-[46px] 1025:gap-[58px] justify-between min-h-screen bg-[#1A1F37] py-[14px] sm:py-[30px] px-[14px] sm:px-[40px]">
    <Menu v-if="!hideMenu"></Menu>
    <Transition>
      <div class="flex w-full justify-center pb-[200px]">
        <slot name="content"></slot>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import {useRoute} from 'vue-router';
import {computed} from "vue";
import Menu from "./Menu.vue";


const route = useRoute();
const hideMenu = computed(() => route.meta.hideMenu);
</script>