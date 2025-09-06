<script setup>
import {onMounted, onBeforeUnmount} from 'vue';

const props = defineProps({
  title: String,
  content: String,
  link: String,
  linkText: String,
});
const emit = defineEmits(['close']);

const onKey = (e) => {
  if (e.key === 'Escape') emit('close');
};

onMounted(() => document.addEventListener('keydown', onKey));
onBeforeUnmount(() => document.removeEventListener('keydown', onKey));
</script>

<template>
  <Teleport to="body">
    <!-- overlay -->
    <div class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="emit('close')"/>

      <!-- dialog -->
      <div
          role="dialog" aria-modal="true"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               w-[min(700px,92vw)] bg-[#001C47] rounded-[78px] pb-[35px] pt-[18px] px-[39px] shadow-xl"
          @click.stop
      >
        <div class="flex items-start justify-between gap-4">
          <span class="text-white font-Golos text-[26px] font-medium leading-normal">{{ title }}</span>

        </div>

        <div
            class="flex w-full  mt-[15px] min-h-[304px] bg-primary rounded-[60px] justify-center items-center px-6 py-6">
          <span class="text-white text-center whitespace-pre-line">{{ content }}</span>
        </div>

        <div class="flex items-center w-full mt-[25px] gap-[21px]">
          <button class="bg-primary cursor-pointer w-full py-4.5 rounded-[20px] flex justify-center items-center hover:opacity-80"
                  @click="emit('close')">
            <span class="text-white font-Golos font-medium text-[21px] tracking-[-0.02em] leading-[21px]">Закрыть</span>
          </button>
          <RouterLink :to="link"
                      class="bg-primary w-full py-4.5 rounded-[20px] flex justify-center items-center hover:opacity-80">
            <span class="text-white font-Golos font-medium text-[21px] tracking-[-0.02em] leading-[21px]">{{
                linkText
              }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </Teleport>
</template>
