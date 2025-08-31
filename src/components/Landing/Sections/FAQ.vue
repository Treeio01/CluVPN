<template>
  <div class="flex mt-[120px] gap-12 w-full max-w-[1275px] ">
    <span
      class="text-white text-[48px] font-semibold leading-[100%] tracking-0"
    >
      Ответы на частые вопросы
    </span>
    <div class="flex px-[34px] flex-col w-full">
      <div
        class="flex py-[17px] cursor-pointer flex-col"
        v-for="(q, i) in questions"
        :key="i"
        @click="q.open = !q.open"
      >
        <div class="flex items-center justify-between">
          <span
            class="text-white font-Golos text-[25px] leading-[96%] tracking-0 font-semibold"
          >
            {{ q.question }}
          </span>
          <svg
            :class="q.open ? 'rotate-180' : ''"
            class="transition-transform ease-in-out duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Transition
          @enter="onEnter"
          @after-enter="onAfterEnter"
          @leave="onLeave"
        >
          <div class="mt-[15px]" v-show="q.open">
            <span class="text-white text-xl font-Golos leading-[40px]">
              {{ q.answer }}
            </span>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const questions = ref([
  {
    question: "Как подключить VPN?",
    answer: "Ответ1",
    open: false,
  },
  {
    question: "Что делать, если VPN сломается?",
    answer: "Ответ2",
    open: false,
  },

  {
    question: "Безопасен ли ваш VPN?",
    answer: "Ответ3",
    open: false,
  },
  {
    question: "Есть ли у вас автопродление?",
    answer: "Ответ4",
    open: false,
  },
  {
    question: "Зачем надо платить?",
    answer: "Ответ5",
    open: false,
  },
]);

const onEnter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
  const h = el.scrollHeight;

  requestAnimationFrame(() => {
    el.style.transition = "height 300ms ease, opacity 300ms ease";
    el.style.height = h + "px";
    el.style.opacity = "1";
  });
};

const onAfterEnter = (el) => {
  el.style.height = "auto";
  el.style.transition = "";
};

const onLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";

  requestAnimationFrame(() => {
    el.style.transition = "height 300ms ease, opacity 300ms ease";
    el.style.height = "0";
    el.style.opacity = "0";
  });
};
</script>
