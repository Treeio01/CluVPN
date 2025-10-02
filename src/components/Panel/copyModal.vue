<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  content: String,
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
</script>

<template>
  <Teleport to="body">
    <div class="modal-container" :class="{ 'closing': isClosing }">
      <div class="modal-overlay" @click="closeModal"></div>
      
      <div class="modal-dialog" @click.stop>
        <div
          class="flex w-full  mt-[15px] min-h-[304px] bg-primary rounded-[60px] justify-center items-center px-6 py-6">
          <span class="text-white font-Days text-[31px] leading-[102%] text-center whitespace-pre-line">{{ content }}</span>
        </div>

        <div class="flex items-center w-full mt-[25px] gap-[21px]">
          <button
            class="bg-panel-blue/62 transition-opacity duration-300 ease-in-out cursor-pointer w-full py-4.5 rounded-[30px] flex justify-center items-center hover:opacity-80"
            @click="closeModal">
            <span class="text-white font-Golos font-medium text-[21px] tracking-[-0.02em] leading-[21px]">Закрыть</span>
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
