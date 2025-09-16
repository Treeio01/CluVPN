<script setup>

import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import QuestionBlock from "../../components/Panel/QuestionBlock.vue";
import HelpBlock from "../../components/Panel/HelpBlock.vue";
import { ref } from "vue";

import Modal from "../../components/Panel/Modal.vue";
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

const isShowModalDeposit = ref(false)

const showModal = () => {
  isShowModalDeposit.value = true;
}


const close = () => {
  isShowModalDeposit.value = !isShowModalDeposit.value;
}

const deposit = (amount) => {
  console.log("Депозит на сумму " + amount)
  close()
}
</script>

<template>
  <LayoutPanel>
    <template #content>
      <div class="flex flex-col items-center mobile:gap-[71px] gap-[20px] w-full max-w-[1043px] ">
        <div
          class="flex 1025:gap-0 gap-[22px] mobile:gap-[77px] 1025:flex-row flex-col bg-panel-blue rounded-[70px] w-full  px-[19px] mobile:px-[48px] py-[18px] mobile:py-[37px]  justify-between">
          <div
            class="flex flex-col gap-[31px] items-center bg-primary px-[14px] mobile:px-[66px] py-[23px] mobile:py-[23px] rounded-[70px]">
            <span class="text-white font-Days text-[32px] mobile:text-[39px] leading-normal">
              Ваш баланс
            </span>
            <div class="flex w-full items-center justify-center py-10 px-[56px] bg-panel-blue/53  rounded-[40px]">
              <span class="text-white font-Days text-[24px] mobile:text-[43px] leading-normal">
                XXXX,XX руб
              </span>
            </div>
            <button @click="showModal"
              class="py-2 mobile:py-[17px] cursor-pointer hover:opacity-75  transition-opacity duration-300 ease-in-out rounded-[25px] bg-panel-blue/53 w-full flex justify-center">
              <span class="text-white font-Golos font-medium  text-[19px] mobile:text-[28px]">
                пополнить баланс
              </span>
            </button>
          </div>
          <div
            class="flex md:flex-row mobile:gap-[5px] sm:gap-[10px] gap-[22px] flex-col 1025:!flex-col  justify-between w-full 1025:max-w-[310px]">
            <div class="mobile:flex hidden bg-primary rounded-[55px] py-[35px] px-[27px]">
              <RouterLink to="/sub"
                class="flex justify-between hover:opacity-75 transition-opacity duration-300 ease-in-out items-center py-[24px] px-[34px] w-full bg-panel-blue/53 rounded-[25px]">
                <span class="text-white font-Golos font-medium text-[20px] mobile:text-[26px] leading-[26px] ">
                  Купить
                  подписку
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.19727 2.38L9.0006 6.18333C9.44977 6.6325 9.44977 7.3675 9.0006 7.81666L5.19727 11.62"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </RouterLink>
            </div>

            <RouterLink to="/sub"
              class="flex  mobile:hidden bg-primary justify-between hover:opacity-75 transition-opacity duration-300 ease-in-out items-center py-[24px] px-[34px] w-full rounded-[22px]">
              <span class="text-white font-Golos font-medium text-[20px] mobile:text-[26px] leading-[26px] ">
                Купить
                подписку
              </span>

            </RouterLink>
            <div class="mobile:flex hidden bg-primary rounded-[55px] py-[35px] px-[27px] w-full">
              <RouterLink to="/sub"
                class="flex justify-between hover:opacity-75 transition-opacity duration-300 ease-in-out cursor-pointer items-center py-[24px] px-[34px]  w-full bg-panel-blue/53 rounded-[25px]">
                <span class="text-white font-Golos font-medium text-[20px] mobile:text-[26px] leading-[26px] ">
                  Начать <br>
                  бесплатно
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.19727 2.38L9.0006 6.18333C9.44977 6.6325 9.44977 7.3675 9.0006 7.81666L5.19727 11.62"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </RouterLink>
            </div>

            <RouterLink to="/sub"
              class="flex mobile:hidden bg-primary justify-between hover:opacity-75 transition-opacity duration-300 ease-in-out items-center py-[24px] px-[34px] w-full rounded-[22px]">
              <span class="text-white font-Golos font-medium text-[20px] mobile:text-[26px] leading-[26px] ">
                Начать
                бесплатно
              </span>

            </RouterLink>
          </div>
        </div>
        <div class="flex md:flex-row flex-col gap-4.5 justify-between items-center w-full">
          <QuestionBlock :questions="questions" title="Вопросы об оплате" class="max-w-full md:max-w-[609px]" />
          <HelpBlock />
        </div>
      </div>

      <Transition name="modalDeposit">
        <Modal v-if="isShowModalDeposit" title="Пополнение баланса" link-text="Пополнить" :is-input="true"
          :click-button="deposit" content="Введите сумму:" @close="close" />
      </Transition>
    </template>
  </LayoutPanel>

</template>

<style scoped></style>