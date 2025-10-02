<template>
  <div
    id="faq"
    class="flex flex-col sm:flex-row mt-[70px] mobile:mt-[120px] gap-12 w-full px-[30px] mobile:px-[50px] 1025:px-6 1354:px-0 1025:max-w-[1275px] "
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <span
      class="text-white text-[33px] mobile:text-[42px] 1025:text-[48px] font-semibold leading-[100%] tracking-0"
    >
      Ответы на частые вопросы
    </span>
    <div class="flex 1025:px-[34px] 1025:max-w-full mobile:max-w-[452px] flex-col w-full">
      <div
        class="flex py-[17px] cursor-pointer flex-col"
        v-for="(q, i) in questions"
        :key="i"
        @click="q.open = !q.open"
      >
        <div class="flex items-center justify-between">
          <span
            class="text-white font-Golos text-[18px] mobile:text-[25px] leading-[96%] tracking-0 font-semibold"
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
            <span class="text-white text-sm mobile:text-xl font-Golos leading-[40px]">
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
    answer: "После покупки или начала пробного периода вы сразу получаете ключ и можете настроить его по инструкции.",
    open: false,
  },
  {
    question: "Что делать, если VPN сломается?",
    answer: "Наш VPN надёжен и стабилен. Если возникнут трудности, команда поддержки всегда поможет.",
    open: false,
  },

  {
    question: "Безопасен ли ваш VPN?",
    answer: "Мы используем лучшие протоколы VLESS и собственные доработки - ваша безопасность гарантирована.",
    open: false,
  },
  {
    question: "Есть ли у вас автопродление?",
    answer: "Автопродления нет: вы сами пополняете баланс, когда удобно, и подписка продлевается.",
    open: false,
  },
  {
    question: "Зачем надо платить?",
    answer: "В мире VPN хватает тех, кто продаёт чужие данные. У нас вы платите лишь цену чашки кофе - за безопасность и скорость.",
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
