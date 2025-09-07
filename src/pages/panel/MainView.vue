<script setup>

import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import {h, ref} from "vue";
import Questions from "../../components/Panel/Questions.vue";
import Tariffs from "../../components/Panel/Tariffs.vue";
import {fetchUser} from "../../services/user-service.js";
import QuestionBlock from "../../components/Panel/QuestionBlock.vue";

const user = fetchUser();

const tariffs = ref([
  {
    time: "6 месяцев",
    sale: 20,
    price: 200,
    timeAtPrice: "в месяц",
    popular: true
  },
  {
    time: "3 месяца",
    sale: 15,
    price: 220,
    timeAtPrice: "в месяц",
    popular: false
  },
  {
    time: "1 месяц",
    sale: 0,
    price: 250,
    timeAtPrice: "в месяц",
    popular: false

  },
])

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
      <div class="flex flex-col gap-20 w-full max-w-[1044px]">
        <div class="flex mobile:flex-row flex-col w-full gap-[33px] bg-panel-blue rounded-[70px] border border-[#5E5E5E]/46">
          <div
              class="flex flex-col items-center w-full max-w-[510px] gap-[30px] rounded-[70px] border border-[#5E5E5E]/46 py-[38px] px-[23px] mobile:px-[43px]">
  <span class="text-white font-Golos font-semibold text-[27px] leading-normal tracking-[-0.02em]">
    Ваши подписки
  </span>
            <div :class="user.isActiveSub ? 'py-[5px] px-[30px]' : 'py-[42px] px-[49px]'"
                 class="flex bg-primary w-full pb-[49px] items-center rounded-[40px] flex-col  gap-[13px]">
              <svg v-show="!user.isActiveSub" width="48" height="47" viewBox="0 0 48 47" fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect x="0.5" width="47" height="47" fill="url(#pattern0_66_2789)"/>
                <defs>
                  <pattern id="pattern0_66_2789" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_66_2789" transform="scale(0.00195312)"/>
                  </pattern>
                  <image id="image0_66_2789" width="512" height="512" preserveAspectRatio="none"
                         xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
              <span v-show="user.isActiveSub"
                    class="text-white p-2.5 font-Golos font-medium text-[27px] leading-normal tracking-[-0.02em]">
                Активная подписка
              </span>
              <ul v-show="user.isActiveSub" class="flex flex-col gap-2 w-full">
                <li class="flex items-center gap-2.5">
                  <span class="text-white font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                    ID:
                  </span>
                  <span class="text-[#D2D2D2] font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                    {{ user.subscription.id }}
                  </span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-white font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                    Ключ:
                  </span>
                  <span class="text-[#D2D2D2] font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                    {{ user.subscription.key }}
                  </span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-white font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                   Оплачена до:
                  </span>
                  <span class="text-[#D2D2D2] font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                    {{ user.subscription.expireTime }}
                  </span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="text-white font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                   Статус:
                  </span>
                  <span class="text-[#D2D2D2] font-Golos font-medium text-[21px] leading-normal tracking-[-0.02em]">
                    {{ user.subscription.status }}
                  </span>
                </li>
              </ul>
              <span v-show="!user.isActiveSub" class="text-white font-Golos text-[27px] font-medium text-center">
  К сожалению, у вас нет активных подписок
</span>
            </div>
            <RouterLink to="/sub"
                class="bg-primary flex justify-center hover:opacity-75 transition-opacity  ease-in-out duration-300 cursor-pointer rounded-[25px] p-4.5 w-full">
              <span class="text-white font-Golos font-semibold text-[21px] leading-normal tracking-[-0.02em]">
Попробовать бесплатно
              </span>
            </RouterLink>
          </div>

          <div class="flex flex-col relative gap-[9px]  w-full py-[25px] pr-[38px]">
            <svg class="absolute right-[38px] top-[25px]" width="52" height="52" viewBox="0 0 52 52" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M40.1697 8.92667L28.2531 4.46334C27.0181 4.00834 25.0031 4.00834 23.7681 4.46334L11.8514 8.92667C9.55474 9.79334 7.69141 12.48 7.69141 14.9283V32.4783C7.69141 34.2333 8.83974 36.5517 10.2481 37.5917L22.1647 46.4967C24.2664 48.0783 27.7114 48.0783 29.8131 46.4967L41.7297 37.5917C43.1381 36.53 44.2864 34.2333 44.2864 32.4783V14.9283C44.3081 12.48 42.4447 9.79334 40.1697 8.92667ZM31.8064 30.2683C31.4814 30.5933 31.0697 30.745 30.6581 30.745C30.2464 30.745 29.8347 30.5933 29.5097 30.2683L26.0647 26.8233L22.5114 30.3767C22.1864 30.7017 21.7747 30.8533 21.3631 30.8533C20.9514 30.8533 20.5397 30.7017 20.2147 30.3767C19.5864 29.7483 19.5864 28.7083 20.2147 28.08L23.7681 24.5267L20.3014 21.06C19.6731 20.4317 19.6731 19.3917 20.3014 18.7633C20.9297 18.135 21.9697 18.135 22.5981 18.7633L26.0431 22.2083L29.4014 18.85C30.0297 18.2217 31.0697 18.2217 31.6981 18.85C32.3264 19.4783 32.3264 20.5183 31.6981 21.1467L28.3397 24.505L31.7847 27.95C32.4347 28.6 32.4347 29.6183 31.8064 30.2683Z"
                  fill="white"/>
            </svg>
            <div class="flex p-2.5">
 <span class="text-white font-Golos text-[22px] max-w-[401px]">
              Защитите себя и своих близких
            и получите свободный доступ
            ко всем заблокированным сервисам
            </span>
            </div>

            <Tariffs :tariffs="tariffs"/>

            <div class="flex p-2.5">
              <RouterLink to="/sub"
                          class="text-white hover:opacity-75 transition-opacity ease-in-out duration-300 font-Golos text-[17px] leading-normal tracking-[-0.02em]">
                Не устроили цены? Другие тарифы
              </RouterLink>
            </div>
          </div>

        </div>
        <div class="flex mobile:flex-row flex-col gap-[45px]">
          <div
              class="flex items-center bg-primary/60 rounded-[70px] py-[25px] gap-[14px] flex-col w-full max-w-[371px]">
           <span class="flex py-[10px] font-Golos font-semibold text-[27px] text-white ">
             Наши преимущества
           </span>
            <div class="flex gap-[25px] flex-col w-full bg-panel-blue/70 py-[43px] px-[42px]">
<span class="text-white font-Golos text-xl leading-normal tracking-[-0.02em]">
  ✓ Безлимитный трафик
</span>
              <span class="text-white font-Golos text-xl leading-normal tracking-[-0.02em]">
  ✓ Техподдержка
</span>
              <span class="text-white font-Golos text-xl leading-normal tracking-[-0.02em]">
  ✓ Блокировка рекламы
</span>
              <span class="text-white font-Golos text-xl leading-normal tracking-[-0.02em]">
  ✓ 1 подписка для всех устройств
</span>

            </div>
            <RouterLink to="/sub" class="py-[10px] flex w-full px-[42px] text-[#B2B2B2] font-Golos text-lg ">
              Больше преимуществ <br>
              На нашем сайте →
            </RouterLink>
          </div>
          <QuestionBlock :questions="questions" title="Частые вопросы"/>
        </div>
      </div>
    </template>
  </LayoutPanel>
</template>

<style scoped>

</style>