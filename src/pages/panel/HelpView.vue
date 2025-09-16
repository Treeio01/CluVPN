<script setup>

import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import Questions from "../../components/Panel/Questions.vue";
import {ref} from "vue";


const questions = ref([
  {
    title: "Перестал работать VPN после пробного периода",
    answer: "ответ1",
    open: false
  },
  {
    title: "Не работает VPN",
    answer: "ответ2",
    open: false
  },
  {
    title: "Проблемы с приложением на Android",
    answer: "ответ3",
    open: false
  },
  {
    title: "Нет ссылки на подписку",
    answer: "ответ1",
    open: false
  },
  {
    title: "Как установить VPN",
    answer: "ответ2",
    open: false
  },
  {
    title: "Ошибка Missing name",
    answer: "ответ3",
    open: false
  },
  {
    title: "Ошибка Service error",
    answer: "ответ2",
    open: false
  },
  {
    title: "Ссылка открывается в браузере",
    answer: "ответ3",
    open: false
  },
])

const questions2 = ref([
  {
    title: "Есть ли у вас автопродление?",
    answer: "ответ1",
    open: false
  },
  {
    title: "Храните ли вы реквизиты?",
    answer: "ответ2",
    open: false
  },
  {
    title: "Храните ли вы мои данные?",
    answer: "ответ3",
    open: false
  },
  {
    title: "Есть ли ограничеия по устройствам?",
    answer: "ответ1",
    open: false
  },
  {
    title: "Есть ли ограничения по трафику?",
    answer: "ответ2",
    open: false
  },
  {
    title: "Умный VPN - что это?",
    answer: "ответ3",
    open: false
  },
  {
    title: "Есть ли у вас возврат?",
    answer: "ответ2",
    open: false
  },
  {
    title: "Какие устройства поддерживаются?",
    answer: "ответ3",
    open: false
  },
])

</script>

<template>
  <LayoutPanel>
    <template #content>
      <div
          class="flex w-full items-center max-w-[1063px] rounded-[70px] bg-panel-blue flex-col pt-[20px] md:pt-[60px] md:pb-[66px] pb-[20px] px-[20px] md:px-[52px]">
        <span class="text-white p-2.5 font-Golos font-medium md:text-[29px] text-xl leading-normal tracking-[-0.02em]">
          Все ответы вы можете найти тут
        </span>
        <div class="flex gap-4 mt-11 mb-[20px] md:mb-[61px]">
          <div class="flex gap-[25px] md:flex-row flex-col">
            <Questions :questions="questions"/>
            <div class="flex p-2.5 ">
              <div class="flex min-h-[1px] md:min-h-[671px] bg-linear-to-b to-white/16 from-black/16 min-w-[1px] w-full"></div>
            </div>
            <Questions :questions="questions2"/>
          </div>
        </div>
        <span class="p-2.5 text-white font-Golos text-[17px] ">
          Не смогли найти ответ на свой вопрос? <RouterLink to="/support" class="underline"> Обратитесь в поддержку </RouterLink>
        </span>
      </div>
    </template>
  </LayoutPanel>
</template>

<style scoped>

</style>