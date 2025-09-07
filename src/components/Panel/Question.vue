<script setup>
import Modal from "./Modal.vue";

const props = defineProps({
  question: Object,
});
const emit = defineEmits(['update:open']);

const toggle = () => emit('update:open', !props.question.open);
const close = () => emit('update:open', false);
</script>

<template>
  <div class="flex cursor-pointer flex-col bg-primary/60 w-full rounded-[20px] py-[21px] px-[25px]" @click="toggle">
    <button type="button" class="flex w-full items-center justify-between gap-2" >
      <span class="text-white text-left font-Golos text-xl font-medium leading-[18px] tracking-[-0.02em]">
        {{ question.title }}
      </span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M5.197 2.38 9 6.183c.45.45.45 1.185 0 1.634L5.197 11.62" stroke="white" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <Transition name="modal">
      <Modal
          v-if="question.open"
          :title="question.title"
          :content="question.answer"
          link="/support"
          link-text="Поддержка"
          @close="close"
      />
    </Transition>
  </div>
</template>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(.98);
}
</style>
