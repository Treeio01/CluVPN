<template>
    <div class="flex flex-col items-center w-full pt-[82px] max-w-[1275px]">
        <span class="text-white font-Golos leading-[30px] text-[40px] font-semibold">
            Выгодные платные тарифы
        </span>
        <div class="flex gap-[30px] mt-[96px] w-full max-w-[1275px]">
            <Tariff v-for="tariff in tariffs" :name="tariff.name" :time="tariff.time" :popular="tariff.popular"
                :price="tariff.price" :sale-amount="tariff.saleAmount"></Tariff>
        </div>
        <div class="flex gap-[14px] w-full items-center mt-[52px]">
            <div class="flex w-full bg-[#BEBEBE] h-[1px]"></div>
            <span class="text-[#BEBEBE] whitespace-nowrap w-full font-Golos font-medium text-[22px] leading-[18px] tracking-0">
                Выгода разная, а возможности одинаковые
            </span>
             <div class="flex w-full bg-[#BEBEBE] h-[1px]"></div>
        </div>
    </div>
</template>
<script setup>
import Tariff from '../Tariff.vue';
import { ref } from 'vue';

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
])
</script>