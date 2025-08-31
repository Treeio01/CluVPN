<template>
    <div
        class="flex flex-col border-5 rounded-[50px] bg-white border-primary pt-[45px] px-[34px] pb-[35px] w-full max-w-[405px]">
        <span class="text-[#202020] font-Golos font-semibold text-[36px] leading-[40px] tracking-0">
            Тариф <span class="text-primary"> {{ type.name }} </span>
        </span>
        <div class="flex items-center gap-[12px] mt-[15px]">
            <span class="text-[#202020] font-Golos font-semibold text-[27px] leading-[30px] tracking-0">
                {{ type.time }}
            </span>
            <div v-if="type.popular" class="flex bg-primary px-3 py-[1px] rounded-[7px]">
                <span class="text-white font-Golos font-semibold text-[15px] leading-[30px] tracking-0">
                    популярный тариф
                </span>
            </div>
        </div>
        <span class="text-[#202020] mt-[39px] font-Golos font-semibold leading-[30px] tracking-0 text-[55px]">
            {{ type.price }}₽ <span class="text-[39px]">
                в
            </span> <span class="text-[19px]">
                месяц
            </span>
        </span>
        <div v-if="type.saleAmount" class="flex bg-primary py-[1px] px-[13px] w-max rounded-[7px] mt-[18px]">
            <span class="text-white font-Golos font-semibold text-[15px] tracking-0">
                выгода {{ type.saleAmount }}%
            </span>
        </div>
        <ul class="flex flex-col gap-[5px] " :class="type.saleAmount ? 'mt-[22px]' : 'mt-[62px]'">
            <li class="gap-[13px] items-center flex">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.25 5H8.75C5 5 2.5 7.5 2.5 11.25V18.75C2.5 22.5 5 25 8.75 25H21.25C25 25 27.5 22.5 27.5 18.75V11.25C27.5 7.5 25 5 21.25 5ZM17.3625 16.2875L14.275 18.1375C13.025 18.8875 12 18.3125 12 16.85V13.1375C12 11.675 13.025 11.1 14.275 11.85L17.3625 13.7C18.55 14.425 18.55 15.575 17.3625 16.2875Z"
                        fill="#0075FF" />
                </svg>

                <span class="text-[#202020] font-Golos font-semibold text-lg leading-[18px]">
                    YouTube без рекламы
                </span>
            </li>
            <li class="gap-[13px] items-center flex">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" fill="white" />
                    <path
                        d="M13.1125 2.78745L6.87501 5.13745C5.43751 5.67495 4.26251 7.37495 4.26251 8.89995V18.1875C4.26251 19.6625 5.23751 21.5999 6.42501 22.4874L11.8 26.5C13.5625 27.825 16.4625 27.825 18.225 26.5L23.6 22.4874C24.7875 21.5999 25.7625 19.6625 25.7625 18.1875V8.89995C25.7625 7.36245 24.5875 5.66245 23.15 5.12495L16.9125 2.78745C15.85 2.39995 14.15 2.39995 13.1125 2.78745Z"
                        fill="#0075FF" stroke="#0075FF" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M11.3125 14.8376L13.325 16.8501L18.7 11.4751" stroke="white" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <span class="text-[#202020] font-Golos font-semibold text-lg leading-[18px]">
                    Защита от трекеров
                </span>
            </li>
            <li class="gap-[13px] items-center flex">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.2375 12.1375C25.8125 11.9625 25.25 11.875 24.55 11.875H17.95C15.775 11.875 15 12.65 15 14.85V24.525C15 25.25 15.0875 25.8125 15.275 26.25C15.6625 27.15 16.4875 27.5 17.95 27.5H24.55C26.725 27.5 27.5 26.7125 27.5 24.525V14.85C27.5 13.3625 27.15 12.525 26.2375 12.1375ZM22.5 24.6875H20C19.975 24.6875 19.9375 24.6875 19.9125 24.675C19.725 24.6625 19.5625 24.6 19.425 24.475C19.2 24.3125 19.0625 24.05 19.0625 23.75C19.0625 23.2375 19.4875 22.8125 20 22.8125H22.5C23.0125 22.8125 23.4375 23.2375 23.4375 23.75C23.4375 24.2625 23.0125 24.6875 22.5 24.6875Z"
                        fill="#0075FF" />
                    <path
                        d="M26.2375 7.7375V8.75C26.2375 9.4375 25.675 10 24.9875 10H17.95C14.75 10 13.125 11.6375 13.125 14.85V26.25C13.125 26.9375 12.5625 27.5 11.875 27.5H9.43751C8.93751 27.5 8.53751 27.1 8.53751 26.6125C8.53751 26.1125 8.93751 25.725 9.43751 25.725H11.875V20.9375H7.50001C4.72501 20.8 2.51251 18.5125 2.51251 15.7V7.7375C2.51251 4.85 4.86251 2.5 7.76251 2.5H21C23.8875 2.5 26.2375 4.85 26.2375 7.7375Z"
                        fill="#0075FF" />
                </svg>


                <span class="text-[#202020] font-Golos font-semibold text-lg leading-[18px]">
                    VPN для всех устройств
                </span>
            </li>
            <li class="gap-[13px] items-center flex">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM20.975 12.125L13.8875 19.2125C13.7125 19.3875 13.475 19.4875 13.225 19.4875C12.975 19.4875 12.7375 19.3875 12.5625 19.2125L9.025 15.675C8.6625 15.3125 8.6625 14.7125 9.025 14.35C9.3875 13.9875 9.9875 13.9875 10.35 14.35L13.225 17.225L19.65 10.8C20.0125 10.4375 20.6125 10.4375 20.975 10.8C21.3375 11.1625 21.3375 11.75 20.975 12.125Z"
                        fill="#0075FF" />
                </svg>


                <span class="text-[#202020] font-Golos font-semibold text-lg leading-[18px]">
                    Доступ в любой точке мира
                </span>
            </li>
        </ul>
        <button class="mt-[28px] w-full p-[23px] bg-primary rounded-[26px]">
            <span class="text-white font-Inter font-bold text-2xl leading-[20px] tracking-0">
                Подключить
            </span>
        </button>
    </div>
</template>
<script setup>

const type = defineProps({
    name: String,
    time: String,
    popular: Boolean,
    price: Number,
    saleAmount: Number,
})

</script>