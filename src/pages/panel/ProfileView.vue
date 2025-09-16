<script setup>
import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import { fetchUser } from "../../services/user-service.js";
import CopyModal from "../../components/Panel/copyModal.vue";
import { ref } from "vue";
import Modal from "../../components/Panel/Modal.vue";

const REF_LINK = "testlink.com"

const user = fetchUser();

const isCopySuccess = ref(false)

const close = () => {
  isCopySuccess.value = !isCopySuccess.value;
}

const copyLink = (userId) => {
  navigator.clipboard.write(REF_LINK + "?ref=" + userId);

  isCopySuccess.value = true;
}

</script>

<template>
  <LayoutPanel>
    <template #content>
      <div class="flex flex-col items-center w-full gap-[20px] mobile:gap-[89px] 1240:gap-[99px] max-w-[1043px]">
        <div
          class="flex w-full items-center gap-[35px] flex-col h-max  bg-panel-blue mobile:rounded-[70px] rounded-[40px] mobile:py-[35px] py-[20px] mobile:px-[67px] px-[20px] mobile:pb-[61px] pb-[20px]">
          <span class="text-white p-2.5 font-Golos font-medium mobile:text-[32px] text-xl leading-normal">
            Ваш профиль
          </span>
          <div class="flex flex-col gap-[41px] w-full">
            <div class="flex gap-4.5 w-full flex-col">
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  Email:
                </span>
                <span class="text-white font-light font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  {{ user.email }}
                </span>
              </div>
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  ID:
                </span>
                <span class="text-white font-light font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  @{{ user.id }}
                </span>
              </div>
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  Баланс:
                </span>
                <span class="text-white font-light font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  {{ user.balance }}₽
                </span>
              </div>
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  Бонусы:
                </span>
                <span class="text-white font-light font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  {{ user.bonusBalance }}₽
                </span>
              </div>
              <div class="flex gap-4.5 items-center">
                <span class="text-white font-medium font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  Активные подписки:
                </span>
                <span class="text-white font-light font-Golos mobile:text-[26px] text-xl leading-[26px]">
                  {{
                    user.isActiveSub
                      ? `CLU-${user.subscription.id}, действительна до ${new Date(user.subscription.expireTime *
                        1000).toLocaleDateString('ru-RU')
                      }`
                      : "У вас нет активных подписок"
                  }}
                </span>

              </div>

            </div>
            <span class="text-white font-Golos mobile:text-[17px] text-xl py-2.5 pr-2.5 tracking-[-0.02em]">
              Появились вопросы? <RouterLink to="/support" class="underline"> Обратитесь в поддержку</RouterLink>
            </span>
          </div>
        </div>
        <div class="flex 1240:flex-row flex-col items-center mobile:gap-[51px] gap-[20px] w-full ">
          <div
            class="flex  bg-primary  mobile:rounded-[60px] rounded-[40px] overflow-hidden mobile:pt-[38px] pt-[20px] w-full max-w-[546px] flex-col items-center gap-[31px]">
            <span class="text-white text-center p-2.5 font-Days mobile:text-[32px] text-xl">
              Реферальная программа
            </span>
            <div class="flex items-center bg-panel-blue/80 mobile:rounded-[60px] rounded-[40px] mobile:py-3 py-[10px] mobile:px-[33px] px-[20px] w-full flex-col gap-[11px]">
              <span class="p-2.5 text-white text-center font-Golos mobile:text-[24px] text-xl leading-[111%] tracking-[-0.04em]">
                Приглашай друзей и получай 20%
                с пополнений. Заработанные бонусы можно потратить
                на покупку или продление ключа
              </span>
              <span class="text-[#B3B3B3] p-2.5 text-center font-Golos mobile:text-[20px] text-xl leading-[111%] tracking-[-0.04em]">
                При регистрации по твоей ссылке
                друг получит 30 бонусных рублей
              </span>
              <button @click="copyLink(user.id)"
                class="py-[17px] cursor-pointer hover:opacity-75 transition-opacity ease-in-out duration-300 w-full bg-primary rounded-[25px]">
                <span class="text-white font-Golos font-semibold text-[22px] leading-normal tracking-[-0.02em]">
                  Пригласить друга
                </span>
              </button>
            </div>
          </div>
          <div class="flex flex-col bg-panel-blue mobile:pt-[21px] pt-[20px] mobile:pb-[48px] pb-[20px] mobile:px-[41px] px-[20px] mobile:rounded-[60px] rounded-[40px] items-center gap-[11px]">
            <span class="text-white py-3 font-Days text-[30px] leading-[111%]">
              История платежей
            </span>
            <div class="flex bg-primary mobile:py-[49px] py-[20px] justify-center mobile:px-[30px] px-[20px] mobile:rounded-[50px] rounded-[40px]">
              <span class="text-white p-2.5 text-center font-Golos font-medium leading-[111%] text-[26px]">
                Здесь вы можете
                посмотреть историю
                ваших платежей
              </span>
            </div>
            <button class="bg-primary w-full rounded-[23px] mobile:py-[13px] py-[10px] mt-[20px]">
              <span class="text-white font-Golos font-medium text-[26px] leading-[111%]">
                Смотреть
              </span>
            </button>
          </div>
        </div>
      </div>
    </template>
  </LayoutPanel>
  <Transition name="modal">
    <CopyModal v-if="isCopySuccess" content="Ссылка скопирована!" @close="close" />
  </Transition>

</template>

<style scoped></style>