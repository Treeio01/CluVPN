<script setup>

import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import QuestionBlock from "../../components/Panel/QuestionBlock.vue";
import HelpBlock from "../../components/Panel/HelpBlock.vue";
import {ref} from "vue";


const questions = ref([
  {
    title: "Почему не работает VPN?",
    answer: "ответ1",
    open: false
  },
  {
    title: "Умный VPN - что это?",
    answer: "ответ2",
    open: false
  },
  {
    title: "Есть ли ограничения по устройствам?",
    answer: "ответ3",
    open: false
  },
])

</script>

<template>
  <LayoutPanel>
    <template #content>
      <div class="flex flex-col items-center gap-[71px] w-full max-w-[1043px] ">
        <div class="flex bg-panel-blue rounded-[70px] w-full  px-[48px] py-[37px]  justify-between">
          <div class="flex flex-col gap-[31px] items-center bg-primary px-[66px] py-[23px] rounded-[70px]">
            <span class="text-white font-Days text-[39px] leading-normal">
              Ваш баланс
            </span>
            <div class="flex w-full py-10 px-[56px] bg-panel-blue/53  rounded-[40px]">
              <span class="text-white font-Days text-[43px] leading-normal">
                XXXX,XX руб
              </span>
            </div>
            <button class="py-[17px] rounded-[25px] bg-panel-blue/53 w-full flex justify-center">
              <span class="text-white font-Golos font-medium  text-[28px]">
                пополнить баланс
              </span>
            </button>
          </div>
          <div class="flex flex-col justify-between w-full max-w-[310px]">
            <div class="flex bg-primary rounded-[55px] py-[35px] px-[27px]">
              <div class="flex justify-between items-center py-[24px] px-[34px] w-full bg-panel-blue/53 rounded-[25px]">
<span class="text-white font-Golos font-medium text-[26px] leading-[26px] ">
  Купить
подписку
</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.19727 2.38L9.0006 6.18333C9.44977 6.6325 9.44977 7.3675 9.0006 7.81666L5.19727 11.62"
                        stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>

              </div>
            </div>
            <div class="flex bg-primary rounded-[55px] py-[35px] px-[27px] w-full">
              <div
                  class="flex justify-between items-center py-[24px] px-[34px]  w-full bg-panel-blue/53 rounded-[25px]">
<span class="text-white font-Golos font-medium text-[26px] leading-[26px] ">
  Начать  <br>
бесплатно
</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.19727 2.38L9.0006 6.18333C9.44977 6.6325 9.44977 7.3675 9.0006 7.81666L5.19727 11.62"
                        stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>

              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center w-full">
          <QuestionBlock :questions="questions" title="Вопросы об оплате" class="max-w-[609px]" />
          <HelpBlock/>
        </div>
      </div>
    </template>
  </LayoutPanel>
</template>

<style scoped>

</style>