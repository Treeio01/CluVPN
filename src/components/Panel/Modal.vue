<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  title: String,
  content: String,
  link: String,
  linkText: String,
  isInput: Boolean,
  clickButton: Function,
  isInnerButton: Boolean,
});

const emit = defineEmits(['close']);

const onKey = (e) => {
  if (e.key === 'Escape') emit('close');
};

onMounted(() => document.addEventListener('keydown', onKey));
onBeforeUnmount(() => document.removeEventListener('keydown', onKey));

const inputValue = ref(0);
</script>

<template>
  <Teleport to="body">
    <!-- overlay -->
    <div class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="emit('close')" />

      <!-- dialog -->
      <div role="dialog" aria-modal="true"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               w-[min(700px,92vw)] flex flex-col items-center bg-[#001C47] rounded-[78px] pb-[35px] pt-[18px] px-[39px] shadow-xl" @click.stop>
        <div class="flex items-start justify-between gap-4">
          <span class="text-white font-Golos text-[26px] font-medium leading-normal">{{ title }}</span>

        </div>

        <div :class="isInput ? 'pt-[36px] pb-[74px] gap-[33px] flex-col px-21' : 'py-6  px-6'"
          class="flex w-full  mt-[15px] min-h-[304px] bg-primary rounded-[60px] justify-center items-center">
          <span class="text-white font-Golos text-[21px] font-medium leading-[100%] text-center whitespace-pre-line">{{
            content }}</span>
          <div class="flex py-[41px] w-full px-[56px] bg-panel-blue/53 rounded-[40px]" v-if="isInput">
            <input type="text" v-model="inputValue" placeholder="XXXX,XX"
              class="text-white outline-none w-full font-Days text-[43px] leading-[100%] tracking-[0.09em]">
          </div>
        </div>

        <div class="flex items-center w-full mt-[25px] gap-[21px]">
          <button
            class="bg-primary cursor-pointer w-full py-4.5 rounded-[20px] flex justify-center items-center hover:opacity-80"
            @click="emit('close')">
            <span class="text-white font-Golos font-medium text-[21px] tracking-[-0.02em] leading-[21px]">Закрыть</span>
          </button>
          <RouterLink :to="link" v-if="!isInput"
            class="bg-primary cursor-pointer w-full py-4.5 rounded-[20px] flex justify-center items-center hover:opacity-80">
            <span class="text-white font-Golos font-medium text-[21px] tracking-[-0.02em] leading-[21px]">{{
              linkText
            }}</span>
          </RouterLink>
          <button @click="clickButton(inputValue)" v-else
            class="bg-primary cursor-pointer w-full py-4.5 rounded-[20px] flex justify-center items-center hover:opacity-80">
            <span class="text-white font-Golos font-medium text-[21px] tracking-[-0.02em] leading-[21px]">{{
              linkText
            }}</span>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
