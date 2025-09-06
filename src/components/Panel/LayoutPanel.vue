<template>
  <div class="flex w-full gap-[58px] justify-between min-h-screen bg-[#1A1F37] py-[46px] px-[98px]">
    <Menu v-if="!hideMenu"></Menu>
    <Transition>
      <div class="flex w-full justify-center">
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