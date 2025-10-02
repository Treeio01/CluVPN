<template>
  <div
    class="flex w-full gap-[10px] sm:flex-row flex-col bg-primary mt-[50px] items-center mobile:mt-[66px] 1025:mt-[88px] rounded-[60px] justify-between max-w-[370px] mobile:max-w-[924px] 1025:max-w-[1275px]  py-[10px] mobile:py-[36px] px-[44px] mobile:px-[34px] 1025:px-[38px]"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <span
      class="text-white sm:text-left text-center font-Golos font-bold text-[26px] mobile:text-[31px] 1025:text-[47px] leading-[29px] mobile:leading-[45px] tracking-0 max-w-[406px]"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      Подключите тестовый период
    </span>
    <span
      class="text-white text-center max-w-[225px] font-semibold text-[21px] 1025:text-[35px] leading-[34px] tracking-0"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      Абсолютно бесплатно
    </span>
    <div class="flex gap-[15px] mobile:gap-[31px] flex-col items-center">
      <span
        class="text-white w-full mobile:order-1 order-2 text-center mobile:text-left font-medium font-Golos text-[12px] mobile:text-[17px] 1025:text-[21px] leading-[21px] max-w-[295px]"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        Полный бесплатный доступ ко всем платным функциям на 5 дней
      </span>
      <RouterLink
        to="/login"
        class="bg-white hover:opacity-75 transition-opacity ease-in-out duration-300 mobile:order-2 order-1 rounded-[26px] py-[17px] 1025:py-[23px] px-[95px]"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <span
          class="text-primary font-Inter text-[21px] 1025:text-[23px] leading-[20px] tracking-0"
        >
          Подключить
        </span>
      </RouterLink>
    </div>
  </div>
</template>
<script setup></script>
