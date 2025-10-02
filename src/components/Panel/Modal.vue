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

const isClosing = ref(false);

const onKey = (e) => {
  if (e.key === 'Escape') closeModal();
};

const closeModal = () => {
  isClosing.value = true;
  setTimeout(() => {
    emit('close');
  }, 300);
};

onMounted(() => document.addEventListener('keydown', onKey));
onBeforeUnmount(() => document.removeEventListener('keydown', onKey));

const inputValue = ref(0);
</script>

<template>
  <Teleport to="body">
    <div class="modal-container" :class="{ 'closing': isClosing }">
      <div class="modal-overlay" @click="closeModal"></div>
      
      <div class="modal-dialog" @click.stop>
        <div class="flex items-start justify-between gap-4">
          <span class="text-white font-Golos text-[26px] font-medium leading-normal">{{ title }}</span>
        </div>

        <div :class="isInput ? 'pt-[36px] pb-[74px] gap-[33px] flex-col px-21' : 'py-6  px-6'"
          class="flex w-full  mt-[15px] min-h-[304px] bg-primary md:rounded-[60px] rounded-[40px] justify-center items-center">
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
            @click="closeModal">
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

<style scoped>
.modal-container {
  position: fixed;
  inset: 0;
  z-index: 50;
  opacity: 1;
  animation: modalFadeIn 0.3s ease-out;
}

.modal-container.closing {
  opacity: 0;
  transition: opacity 0.3s ease-in;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: 1;
  animation: overlayFadeIn 0.3s ease-out;
}

.modal-container.closing .modal-overlay {
  opacity: 0;
  transition: opacity 0.3s ease-in;
}

.modal-dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(700px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #001C47;
  border-radius: 78px;
  padding: 18px 39px 35px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  opacity: 1;
  animation: dialogSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-container.closing .modal-dialog {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
  transition: all 0.3s ease-in;
}

@media (max-width: 768px) {
  .modal-dialog {
    border-radius: 40px;
  }
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes overlayFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes dialogSlideIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) translateY(0);
  }
}
</style>

