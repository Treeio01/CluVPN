<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'

// лучше типизировать
defineProps<{
  tariff: { time: string; sale: number; price: number; timeAtPrice?: string; popular?: boolean }
}>()

const isOpen = ref(false)
</script>

<template>
  <button
      type="button"
      @click="isOpen = true"
      class="flex cursor-pointer group w-full py-3.5 relative justify-between pl-[27px] pr-[39px] rounded-[20px] border"
      :class="tariff.popular
      ? 'bg-primary/34 border-primary shadow-[inset_0_4px_11px_0_rgba(0,0,0,0.25)]'
      : 'border-white'"
  >
    <svg
        class="absolute group-hover:translate-x-1.5 transition-transform ease-in-out duration-300 top-1/2 -translate-y-1/2 right-[12px]"
        width="14" height="15" viewBox="0 0 14 15" fill="none" aria-hidden="true">
      <path d="M5.197 2.88 9 6.683c.45.45.45 1.185 0 1.634L5.197 12.12"
            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <div class="flex gap-[2px] flex-col text-left">
      <span class="text-white font-medium leading-normal font-Golos text-[17px]">
        {{ tariff.time }}
      </span>
      <span class="font-Golos leading-normal text-[13px] font-semibold"
            :class="tariff.sale ? 'text-white' : 'text-[#B8B8B8]'">
        {{ tariff.sale ? `скидка ${tariff.sale}%` : 'без скидки' }}
      </span>
    </div>

    <div class="flex gap-[2px] flex-col items-end">
      <span class="text-white leading-normal font-Inter font-semibold text-lg">
        {{ tariff.price }}₽
      </span>
      <span class="text-[#B8B8B8] leading-normal font-Inter text-[13px]">
        {{ tariff.timeAtPrice }}
      </span>
    </div>
  </button>

  <Modal
      v-if="isOpen"
      :title="`Подписка ${tariff.time}`"
      :content="`Подписка на ${tariff.time}. Стоимость: ${tariff.price} ₽ (${tariff.timeAtPrice ?? 'в месяц'})`"
      link="/support"
      link-text="Купить"
      @close="isOpen = false"
  />
</template>
