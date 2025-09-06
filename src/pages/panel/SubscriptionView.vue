<script setup>
import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import Questions from "../../components/Panel/Questions.vue";
import {ref} from "vue";
import Tariffs from "../../components/Panel/Tariffs.vue";
import Tariff from "../../components/Panel/Tariff.vue";
import {fetchUser} from "../../services/user-service.js";
import HelpBlock from "../../components/Panel/HelpBlock.vue";

const user = fetchUser();

const tariffs = ref([

  {
    time: "Посуточный",
    sale: 0,
    price: 10,
    timeAtPrice: "в сутки",
    popular: true
  }, {
    time: "7 дней",
    sale: 0,
    price: 65,
    timeAtPrice: "7 дней",
    popular: true
  },
  {
    time: "1 месяц",
    sale: 0,
    price: 250,
    timeAtPrice: "в месяц",
    popular: true

  },
  {
    time: "3 месяца",
    sale: 15,
    price: 220,
    timeAtPrice: "в месяц",
    popular: true
  },
  {
    time: "6 месяцев",
    sale: 20,
    price: 200,
    timeAtPrice: "в месяц",
    popular: true
  },
])

</script>

<template>
  <LayoutPanel>
    <template #content>
      <div class="flex gap-12 w-full justify-center">
        <div
            class="flex flex-col items-center gap-[62px] w-full max-w-[620px] bg-panel-blue/92 rounded-[70px] pt-12 px-12 pb-[53px]">
          <span class="p-2.5 text-center leading-[22px] text-white font-Days text-[25px] leading-normal">
            {{ user.isActiveSub ? "У вас уже есть активная подписка Но вы можете сменить тариф" : "Платные подписки" }}
          </span>
          <div class="flex flex-col w-full gap-[45px]">
            <div class="flex bg-primary/14 rounded-[50px] py-[45px] px-10">
              <Tariffs :tariffs="tariffs"/>
            </div>
            <div class="flex flex-col gap-4 items-center">
              <div class="flex w-full bg-linear-to-r from-black/16 via-white/29 to-black/16 min-h-[1px]"></div>
              <span class="p-2.5 text-[#B2B2B2] font-Golos">
Внимание! Подписка не продляется автоматически
              </span>
            </div>
          </div>

        </div>
        <div class="flex flex-col gap-[49px] w-full max-w-[398px]">
          <div class="flex flex-col items-center  pb-2.5 w-full overflow-hidden bg-panel-blue rounded-[60px] gap-3">
            <div class="flex bg-primary rounded-[30px] px-6 pt-[52px] pb-[66px]">
              <span class="text-white text-center p-2.5 font-Days text-[20px]">
                Хотите протестировать VPN
перед покупкой?
              </span>
            </div>

            <div class="flex flex-col items-center gap-[21px] px-4">
                <span class="p-2.5 leading-[22px]  text-[#F5F5F5] text-center font-Golos font-semibold text-lg ">
Наш ВПН работает без выключения. Умный алгоритм сам распределяет трафик и открывает любые сайты и сервисы.
                </span>
              <button class="bg-primary max-w-[340px]  py-[19px] w-full rounded-[25px]">
                <span class="text-white font-Golos font-semibold text-[19px] leading-normal tracking-[-0.02em]">
                  Попробовать бесплатно
                </span>
              </button>
            </div>
            <span class="p-2.5 text-[#BCBCBC] font-Golos text-[15px]">
              и доступен на всех устройствах
            </span>
          </div>
          <HelpBlock/>
        </div>
      </div>
    </template>
  </LayoutPanel>
</template>

<style scoped>

</style>