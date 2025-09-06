<script setup>
import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import {ref, nextTick, watch, onMounted} from "vue";

const messages = ref([
  {message: "Привет! Чем помочь?", isUser: false},
]);

const message = ref("");
const listRef = ref < HTMLElement | null > (null);

const scrollToBottom = () => {
  const el = listRef.value;
  if (el) el.scrollTop = el.scrollHeight;
};

const addMessage = (_message, _isUser) => {
  messages.value.push({message: _message, isUser: _isUser});
};

const sendMessage = () => {
  const text = message.value.trim();
  if (!text) return;
  addMessage(text, true);
  message.value = "";
  nextTick(scrollToBottom);
};

onMounted(scrollToBottom);
watch(messages, () => nextTick(scrollToBottom), {deep: true});
</script>

<template>
  <LayoutPanel>
    <template #content>
      <div
          class="flex items-center w-full max-w-[1043px] bg-panel-blue rounded-[70px] gap-[25px] flex-col pt-[31px] px-[36px] pb-[44px]">
        <span class="text-white font-Golos font-medium text-[30px]">Чат с поддержкой</span>

        <div class="flex flex-col gap-[42px] bg-primary/20 pt-[47px] px-[38px] pb-[52px] h-full rounded-[70px] w-full">
          <!-- Лист сообщений -->
          <div ref="listRef" class="flex flex-col gap-[14px] h-full max-h-[656px] overflow-y-auto">
            <div
                v-for="(m, i) in messages"
                :key="i"
                :class="[
                'max-w-[610px] w-fit px-4 py-3 rounded-2xl',
                m.isUser ? 'ml-auto rounded-l-2xl rounded-br-2xl bg-primary' : 'mr-auto rounded-r-2xl rounded-bl-2xl bg-primary/60'
              ]"
            >
              <span class="text-white font-Golos text-sm leading-[23px] whitespace-pre-wrap break-words">
                {{ m.message }}
              </span>
            </div>
          </div>

          <!-- Инпут -->
          <div class="flex bg-primary p-1.5 rounded-full items-center gap-1.5">
            <svg class="shrink-0" width="36" height="37" viewBox="0 0 36 37" fill="none" aria-hidden="true">
              <rect x="4.25" y="4.90381" width="27.5" height="27.5" rx="13.75" stroke="white" stroke-width="0.5"/>
              <path d="M13 18.6538H23M18 13.6538V23.6538" stroke="white" stroke-width="1.6" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>

            <input
                v-model="message"
                @keyup.enter="sendMessage"
                type="text"
                class="text-white outline-none w-full bg-transparent"
                placeholder="Задайте свой вопрос в чате"
                autocomplete="off"
            />

            <button @click="sendMessage" class="shrink-0 rounded-full">
              <svg width="34" height="35" viewBox="0 0 34 35" fill="none" aria-hidden="true">
                <rect width="34" height="34" rx="17" y="0.653809" fill="white"/>
                <path
                    d="M9.13 15.94c-.57.24-.93.67-.93 1.28 0 .42.29.99.86 1.23l3.54.53.79 2.74c.09.28.14.42.34.61.34.31.92.21 1.17-.04l1.7-1.68.44.36c1.45 1.16 3.39 2.65 4.44 3.37.62.43 1.06.88 1.75.88.38 0 .96-.18 1.33-.59.26-.29.41-.73.47-1.14.15-.98 1.81-11.12 1.8-11.48-.01-.57-.48-.89-.88-.89-.23 0-.43.07-.88.21-3.52 1.07-14.64 4.57-14.87 4.66Zm13.15-2.25-6.5 5.9c-.59.6-.62 1.62-.62 1.62l-.96-3.07 8.08-4.45Z"
                    fill="#0075FF"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </template>
  </LayoutPanel>
</template>
