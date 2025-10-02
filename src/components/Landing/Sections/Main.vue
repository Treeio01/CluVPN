<template>
  <div
    class="flex w-full relative max-w-[1440px] flex-col py-[59px] mobile:py-[50px] 1025:py-[140px] pb-[28px] px-[30px] mobile:px-[53px] 1025:px-[85px]"
    data-aos="fade-up"
    data-aos-duration="900"
  >
    <img
      src="../../../assets/img/mobile.png"
      class="max-w-[462px] hidden 1354:flex absolute right-[76px] top-[50px]"
      alt=""
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="900"
    />

    <div
      class="flex flex-col gap-[5px] mobile:gap-[30px] max-w-[761px]"
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="900"
    >
      <h1
        class="text-white font-Tektur font-semibold text-[40px] mobile:text-[51px] leading-[90%] tracking-0"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="900"
      >
        Ваш интернет на ваших правилах
      </h1>
      <span
        class="text-[#B7B7B7] font-Golos text-sm mobile:text-xl font-medium leading-[16px] mobile:leading-[28px] tracking-0 lg:max-w-[560px]"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="900"
      >
        Подключитесь сейчас и забудьте о блокировках и навязчивой рекламе в
        интернете
      </span>
    </div>
    <div
      class="flex gap-3 mobile:flex-row flex-col mobile:gap-[25px] items-center mt-[193px] mobile:mt-[45px]"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-duration="900"
    >
      <RouterLink
        to="/login"
        class="bg-primary hover:opacity-75 transition-opacity ease-in-out duration-300 mobile:order-1 order-2 mobile:w-max w-full rounded-[10px] md:rounded-[20px] py-[9px] md:py-6 px-6 md:px-9 flex items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="900"
      >
        <span
          class="text-white text-center font-Days text-lg leading-[20px] tracking-[-12%]"
        >
          Купить от 200р / мес
        </span>
      </RouterLink>
      <RouterLink
        to="/login"
        class="bg-white hover:opacity-75 transition-opacity ease-in-out duration-300 mobile:order-2 order-1 mobile:w-max w-full rounded-[10px] md:rounded-[20px] py-[9px] md:py-6 px-6 md:px-[21px] flex items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="900"
      >
        <span
          class="text-primary text-center font-Days text-lg leading-[20px] tracking-[-12%]"
        >
          Попробовать бесплатно
        </span>
      </RouterLink>
    </div>
    <div
      class="flex mt-[10px] mobile:mt-[34px] items-center"
      data-aos="fade"
      data-aos-delay="700"
      data-aos-duration="900"
    >
      <span
        class="text-[#CCCCCC] font-Roboto text-[12px] mobile:text-[17px] leading-[20px] tracking-[0.07em]"
      >
        ✔ Вернем деньги, если не оправдаем ваших ожиданий
      </span>
    </div>
    <div
      class="flex mt-[22px] mobile:mt-[65px] relative flex-col gap-[15px] mobile:gap-[11px] 1025:gap-[21px] bg-primary rounded-[20px] mobile:rounded-[40px] 1025:rounded-[60px] w-full max-w-[918px] 1025:max-w-[761px] p-4 mobile:p-8 1025:p-10"
      data-aos="fade-up"
      data-aos-delay="800"
      data-aos-duration="900"
    >
      <img
        src="../../../assets/img/human.png"
        class="absolute md:flex hidden max-w-[191px] bottom-[-16px] right-[91px] 1025:right-[60px]"
        alt=""
        data-aos="fade-left"
        data-aos-delay="900"
        data-aos-duration="900"
      />
      <span
        class="text-white font-Golos font-bold text-[22px] mobile:text-[33px] md:text-[41px] 1025:text-[44px] leading-[100%] tracking-0"
        data-aos="fade-down"
        data-aos-delay="950"
        data-aos-duration="900"
      >
        Умный VPN - что это такое?
      </span>
      <span
        class="text-white font-Golos font-semibold text-[17px] 1025:text-[30px] mobile:text-[25px] leading-[100%] tracking-[-0.03em] max-w-[267px] mobile:max-w-[420px]"
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="900"
      >
        Об этом и многом другом рассказали дальше
      </span>
      <button
        onclick="window.location.href='#conditions'"
        class="bg-white cursor-pointer hover:opacity-75 transition-opacity ease-in-out duration-300 rounded-[10px] mobile:rounded-[20px] 1025:rounded-[25px] py-2 mobile:py-[18px] 1025:py-[23px] w-full max-w-[360px]"
        data-aos="zoom-in"
        data-aos-delay="1100"
        data-aos-duration="900"
      >
        <span
          class="text-primary font-Inter font-bold text-[15px] mobile:text-[28px] leading-[20px] tracking-0"
        >
          Смотреть
        </span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
