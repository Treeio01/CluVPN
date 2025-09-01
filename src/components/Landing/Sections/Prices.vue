<template>
  <div id="prices"
    class="flex flex-col items-center w-full px-[30px] mobile:px-[50px] 1025:px-0 pt-[49px] mobile:pt-[64px] 1025:pt-[82px] max-w-[1024px] 1025:max-w-[1275px]"
  >
    <span
      class="text-white font-Golos leading-[30px] text-[20px] mobile:text-[35px] 1025:text-[40px] font-semibold"
    >
      Выгодные платные тарифы
    </span>
    <div
      class="mobile:flex hidden 1025:flex-row flex-col items-center mobile:gap-[25px] 1025:gap-[30px] mt-[30px] mobile:mt-[66px] 1025:mt-[96px] w-full max-w-[1275px]"
    >
      <Tariff
        v-for="tariff in tariffs"
        :name="tariff.name"
        :time="tariff.time"
        :popular="tariff.popular"
        :price="tariff.price"
        :sale-amount="tariff.saleAmount"
      ></Tariff>
    </div>
    <div
      class="mobile:hidden flex 1025:flex-row flex-col items-center mobile:gap-[25px] 1025:gap-[30px] mt-[30px] mobile:mt-[66px] 1025:mt-[96px] w-full max-w-[370px]"
    >
      <swiper
      class="w-full"
      :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="tariff in tariffs">
          <Tariff
            :name="tariff.name"
            :time="tariff.time"
            :popular="tariff.popular"
            :price="tariff.price"
            :sale-amount="tariff.saleAmount"
          ></Tariff>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex gap-[14px] w-full items-center mt-[52px]">
      <div class="flex w-full bg-[#BEBEBE] h-[1px]"></div>
      <span
        class="text-[#BEBEBE] text-center flex mobile:whitespace-nowrap font-Golos font-medium mobile:min-w-auto mobile:max-w-[500px] w-full min-w-[146px] text-[10px] mobile:text-[15px] 1025:text-[22px] leading-[10px] tracking-0"
      >
        Выгода разная, а возможности одинаковые
      </span>
      <div class="flex w-full bg-[#BEBEBE] h-[1px]"></div>
    </div>
  </div>
</template>
<script setup>
import Tariff from "../Tariff.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules"
import "swiper/css";

import 'swiper/css/pagination';

const tariffs = ref([
  {
    name: "Long",
    time: "6 месяцев",
    popular: true,
    price: 200,
    saleAmount: 20,
  },
  {
    name: "Optimal",
    time: "3 месяца",
    popular: false,
    price: 220,
    saleAmount: 12,
  },
  {
    name: "Base",
    time: "1 месяц",
    popular: false,
    price: 250,
    saleAmount: 0,
  },
]);
</script>
