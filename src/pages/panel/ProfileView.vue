<script setup>
import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import {fetchUser} from "../../services/user-service.js";

const user = fetchUser();
</script>

<template>
  <LayoutPanel>
    <template #content>
      <div class="flex flex-col items-center w-full gap-[99px] max-w-[1043px]">
        <div
            class="flex w-full items-center gap-[35px] flex-col h-max  bg-panel-blue rounded-[70px] py-[35px] px-[67px] pb-[61px]">
  <span class="text-white p-2.5 font-Golos font-medium text-[32px] leading-normal">
    Ваш профиль
  </span>
          <div class="flex flex-col gap-[41px] w-full">
            <div class="flex gap-4.5 w-full flex-col">
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos text-[26px] leading-[26px]">
            Email:
                </span>
                <span class="text-white font-light font-Golos text-[26px] leading-[26px]">
{{ user.email }}
              </span>
              </div>
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos text-[26px] leading-[26px]">
            ID:
                </span>
                <span class="text-white font-light font-Golos text-[26px] leading-[26px]">
                @{{ user.id }}
              </span>
              </div>
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos text-[26px] leading-[26px]">
            Баланс:
                </span>
                <span class="text-white font-light font-Golos text-[26px] leading-[26px]">
                {{ user.balance }}₽
              </span>
              </div>
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos text-[26px] leading-[26px]">
            Бонусы:
                </span>
                <span class="text-white font-light font-Golos text-[26px] leading-[26px]">
                {{ user.bonusBalance }}₽
              </span>
              </div>
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos text-[26px] leading-[26px]">
           Активные подписки:
                </span>
                <span class="text-white font-light font-Golos text-[26px] leading-[26px]">
  {{
                    user.isActiveSub
                        ? `CLU-${user.subscription.id}, действительна до ${
                            new Date(user.subscription.expireTime * 1000).toLocaleDateString('ru-RU')
                        }`
                        : "У вас нет активных подписок"
                  }}
</span>

              </div>

            </div>
            <span class="text-white font-Golos text-[17px] py-2.5 pr-2.5 tracking-[-0.02em]">
    Появились вопросы? <RouterLink to="/support" class="underline"> Обратитесь в поддержку</RouterLink>
  </span>
          </div>
        </div>
        <div class="flex gap-[51px] w-full">
          <div
              class="flex bg-primary rounded-[60px] overflow-hidden pt-[38px] w-full max-w-[546px] flex-col items-center gap-[31px]">
            <span class="text-white p-2.5 font-Days text-[32px]">
              Реферальная программа
            </span>
            <div class="flex items-center bg-panel-blue/80 rounded-[60px] py-3 px-[33px] w-full flex-col gap-[11px]">
              <span class="p-2.5 text-white text-center font-Golos text-[24px] leading-[111%] tracking-[-0.04em]">
                Приглашай друзей и получай 20%
с пополнений. Заработанные бонусы можно потратить
на покупку или продление ключа
              </span>
              <span class="text-[#B3B3B3] p-2.5 text-center font-Golos text-[20px] leading-[111%] tracking-[-0.04em]">
                При регистрации по твоей ссылке
друг получит 30 бонусных рублей
              </span>
              <button class="py-[17px] w-full bg-primary rounded-[25px]">
                <span class="text-white font-Golos font-semibold text-[22px] leading-normal tracking-[-0.02em]">
                  Пригласить друга
                </span>
              </button>
            </div>
          </div>
          <div class="flex flex-col bg-panel-blue pt-[21px] pb-[48px] px-[41px] rounded-[60px] items-center gap-[11px]">
            <span class="text-white py-3 font-Days text-[30px] leading-[111%]">
              История платежей
            </span>
            <div class="flex bg-primary py-[49px] justify-center px-[30px] rounded-[50px]">
              <span class="text-white p-2.5 text-center font-Golos font-medium leading-[111%] text-[26px]">
                Здесь вы можете
посмотреть историю
ваших платежей
              </span>
            </div>
            <button class="bg-primary w-full rounded-[23px] py-[13px] mt-[20px]">
              <span class="text-white font-Golos font-medium text-[26px] leading-[111%]">
                Смотреть
              </span>
            </button>
          </div>
        </div>
      </div>
    </template>
  </LayoutPanel>
</template>

<style scoped>

</style>