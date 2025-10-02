<template>
  <div id="prices"
    class="flex flex-col items-center w-full px-[30px]  mobile:px-[50px] 1025:px-6 1354:px-0 pt-[49px] mobile:pt-[64px] 1025:pt-[82px] max-w-[1024px] 1025:max-w-[1275px]"
    data-aos="fade-up"
    data-aos-duration="700"
  >
    <span
      class="text-white font-Golos text-center leading-[30px] text-[20px] mobile:text-[35px] 1025:text-[40px] font-semibold"
      data-aos="fade-down"
      data-aos-duration="700"
    >
      Выгодные платные тарифы
    </span>
    <div
      class="mobile:flex hidden 1025:flex-row flex-col items-center mobile:gap-[25px] 1025:gap-[30px] mt-[30px] mobile:mt-[66px] 1025:mt-[96px] w-full max-w-[1275px]"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="700"
    >
      <Tariff
        v-for="(tariff, idx) in tariffs"
        :key="tariff.name"
        :name="tariff.name"
        :time="tariff.time"
        :popular="tariff.popular"
        :price="tariff.price"
        :sale-amount="tariff.saleAmount"
        :data-aos="'zoom-in'"
        :data-aos-delay="200 + idx * 100"
        data-aos-duration="700"
      ></Tariff>
    </div>
    <div
      class="mobile:hidden flex 1025:flex-row flex-col items-center mobile:gap-[25px] 1025:gap-[30px] mt-[30px] mobile:mt-[66px] 1025:mt-[96px] w-full max-w-[370px]"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="700"
    >
      <swiper
        class="w-full"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="(tariff, idx) in tariffs" :key="tariff.name">
          <Tariff
            :name="tariff.name"
            :time="tariff.time"
            :popular="tariff.popular"
            :price="tariff.price"
            :sale-amount="tariff.saleAmount"
            data-aos="zoom-in"
            :data-aos-delay="200 + idx * 100"
            data-aos-duration="700"
          ></Tariff>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex gap-[14px] w-full items-center mt-[52px]" data-aos="fade" data-aos-delay="400" data-aos-duration="700">
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
