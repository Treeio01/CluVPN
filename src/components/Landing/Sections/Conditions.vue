<template>
  <div
    class="flex mobile:mt-14 flex-col items-center w-full max-w-[1440px] bg-white rounded-t-[100px] pt-[32px] mobile:pt-[70px] px-[30px] mobile:px-[50px] 1025:px-[82px]"
  >
    <h1
      class="text-black font-Golos text-center font-semibold text-[20px] mobile:text-[35px] 1025:text-[40px] leading-[19px] tracking-0"
    >
      Лучшие условия - для всех пользователей
    </h1>
    <div
      class="flex mt-[26px] mobile:mt-15 relative w-full rounded-[80px] bg-primary pt-[35px] mobile:pt-[67px] 1025:pt-[63px] px-[36px] mobile:px-[47px] 1025:px-[91px] flex-col gap-[11px] mobile:gap-[34px] 1025:gap-[45px] pb-[147px] mobile:pb-[80px] 1025:pb-[111px]"
    >
      <img
        src="../../../assets/img/rocket.png"
        class="absolute max-w-[148px] 1025:max-w-[181px] right-[-12px] mobile:right-[6px] 1025:right-[49px] bottom-[-9px] 1025:bottom-[43px] rotate-[46deg]"
        alt=""
      />
      <span
        class="text-white font-Golos max-w-[883px] font-bold text-[26px] mobile:text-[37px] 1025:text-[44px] leading-[29px] tracking-0"
      >
        Умный VPN - новый обход блокировок
      </span>
      <span
        class="text-white font-Golos max-w-[230px] mobile:max-w-[658px] 1025:max-w-[852px] font-semibold text-sm mobile:text-[24px] 1025:text-[33px] leading-[16px] mobile:leading-[34px] tracking-0"
      >
        Наш VPN включается только для заблокированных сервисов, блокируя
        назойливую рекламу и трекеры, работает из любой точки мира!
      </span>
    </div>
    <div
      class="flex mobile:flex-row flex-col w-full mt-[25px] mobile:mt-[73px] gap-[34px] 1025:gap-[56px]"
    >
      <div
        class="flex 1025:flex-row mobile:flex-col flex-col w-full gap-[42px] 1025:gap-[33px]"
      >
        <div
          class="flex flex-col flex-1 relative mobile:gap-[29px] 1025:gap-[54px] w-full max-w-full 1025:max-w-[839px] pb-[35px] mobile:pb-[46px] 1025:pb-[51px] pt-[33px] mobile:pt-[41px] 1025:pt-[45px] px-[44px] mobile:px-[70px] 1025:px-[90px] rounded-[50px] mobile:rounded-[70px] 1025:rounded-[80px] border-4 border-primary"
        >
          <img
            src="../../../assets/img/tiktok.png"
            class="absolute mobile:flex hidden 1025:max-w-full mobile:max-w-[120px] mobile:top-[78px] 1025:top-[81px] mobile:right-[200px] 1025:right-[188px]"
            alt=""
          />
          <img
            src="../../../assets/img/telegram.png"
            class="absolute mobile:flex hidden 1025:max-w-full mobile:max-w-[100px] mobile:top-[44px] 1025:top-[40px] mobile:right-[86px] 1025:right-[50px]"
            alt=""
          /><img
            src="../../../assets/img/instagram.png"
            class="absolute mobile:flex hidden 1025:max-w-full mobile:max-w-[120px] mobile:top-[135px] 1025:top-[150px] mobile:right-[99px] 1025:right-[66px]"
            alt=""
          />
          <img
            src="../../../assets/img/youtube.png"
            class="absolute mobile:flex hidden 1025:max-w-full mobile:max-w-[120px] mobile:top-[187px] 1025:top-[211px] mobile:right-[211px] 1025:right-[202px]"
            alt=""
          />
          <img
            src="../../../assets/img/discord.png"
            class="absolute mobile:flex hidden 1025:max-w-full mobile:max-w-[120px] mobile:top-[228px] 1025:top-[263px] mobile:right-[86px] 1025:right-[50px]"
            alt=""
          />
          <div class="flex flex-col gap-4 mobile:gap-[18px] 1025:gap-[31px]">
            <span
              class="text-black font-Golos font-semibold text-[25px] mobile:text-[36px] leading-[22px] mobile:leading-[29px] tracking-0 max-w-[397px]"
            >
              <span class="text-primary"> Беспрерывная </span> работа всех
              сервисов
            </span>
            <span
              class="text-black font-Golos font-medium text-sm mobile:text-lg leading-[16px] mobile:leading-[22px] tracking-0 max-w-[325px]"
            >
              Забудьте о блокировках соцсетей,
              <span class="text-primary">мессенджеров</span> и
              <span class="text-primary">звонков</span>. Общайтесь с друзьями и
              близкими и пользуйтесь любимыми сервисами где угодно.
            </span>
          </div>
          <div class="mobile:hidden flex items-center justify-between mb-4.5">
            <img
              src="../../../assets/img/discord.png"
              class="w-12 h-auto object-contain"
            />
            <img
              src="../../../assets/img/telegram.png"
              class="w-10 h-auto object-contain"
            />
            <img
              src="../../../assets/img/youtube.png"
              class="w-12 h-auto object-contain"
            />
            <img
              src="../../../assets/img/instagram.png"
              class="w-12 h-auto object-contain"
            />
            <img
              src="../../../assets/img/tiktok.png"
              class="w-12 h-auto object-contain"
            />
          </div>

          <button
            class="bg-primary max-w-[370px] py-[16px] mobile:py-[22px] w-full mobile:px-[93px] rounded-[22px] hover:bg-primary/75 transition-colors ease duration-300"
          >
            <span
              class="text-white font-Inter font-bold text-[16px] mobile:text-[23px] leading-[20px] tracking-0"
            >
              Подключиться
            </span>
          </button>
        </div>
        <div
          class="flex w-full relative flex-col gap-[14px] mobile:gap-[29px] mobile:max-w-full 1025:max-w-[403px] bg-[#F5F7FA] rounded-[30px] mobile:rounded-[50px] 1025:rounded-[80px] mobile:pb-[63px] 1025:pb-[250px] py-[25px] mobile:py-[36px] 1025:py-[45px]  pl-[38px] mobile:pl-[68px] 1025:pl-[63px] pr-[29px] mobile:pr-[77px]"
        >
          <img
            src="../../../assets/img/headphones.png"
            class="absolute right-[-2px] mobile:right-[57px] 1025:right-[8px] bottom-[21px] mobile:bottom-[8px] 1025:bottom-[13px] rotate-[13deg] max-w-[110px] mobile:max-w-[187px] 1025:max-w-[212px]"
            alt=""
          />
          <span
            class="text-black font-Golos font-semibold text-[25px] mobile:text-[36px] mobile:max-w-[238px] 1025:max-w-full leading-[29px] tracking-0"
          >
            Техническая <span class="text-primary"> поддержка </span>
          </span>
          <span
            class="text-black font-medium text-sm mobile:text-lg mobile:max-w-[263px] 1025:max-w-full leading-[20px] tracking-0"
          >
            команда специалистов <br />
            <span class="text-primary"> решит</span> любую вашу проблему
          </span>
        </div>
      </div>
      <div class="flex mobile:flex-row flex-col  gap-[14px] mobile:gap-[28px] 1025:gap-[38px] w-full">
        <div
          class="flex w-full relative flex-col gap-[21px] mobile:gap-[21px] 1025:gap-[29px] mobile:max-w-[470px] 1025:max-w-[667px] bg-[#F5F7FA] rounded-[30px] mobile:rounded-[40px] 1025:rounded-[80px] pb-[56px] mobile:pb-[79px] 1025:pb-[182px] py-[30px]  mobile:py-[33px] 1025:py-[48px] pl-[39px] mobile:pl-[39px] 1025:pl-[56px] mobile:pr-[80px] 1025:pr-[77px]"
        >
          <img
            src="../../../assets/img/pass.png"
            class="absolute right-[5px] mobile:right-[-4px] 1025:right-[26px] bottom-[7px] mobile:bottom-[-7px] 1025:bottom-[-13px] max-w-[123px] mobile:max-w-[158px] 1025:max-w-[252px]"
            alt=""
          />
          <span
            class="text-black font-Golos font-semibold text-[25px] mobile:text-[36px] max-w-[308px] leading-[25px] mobile:leading-[40px] tracking-0"
          >
            <span class="text-primary"> Бесплатный </span>
            тестовый период
          </span>
          <span
            class="text-black font-medium text-lg max-w-[250px] mobile:max-w-[359px] leading-[20px] tracking-0"
          >
            <span class="text-primary"> Проверьте </span> все возможности <br />
            и <span class="text-primary">убедитесь</span> в качестве нашей
            защиты
          </span>
        </div>
        <div class="flex w-full flex-col gap-[14px] mobile:gap-[26px]">
          <div
            class="flex flex-col rounded-[20px] mobile:rounded-[20px] 1025:rounded-[40px] bg-[#F5F7FA] gap-[7px] mobile:gap-[13px] 1025:gap-[19px] px-[28px] mobile:px-[30px] 1025:px-[39px] py-[21px] mobile:py-[26px] 1025:py-[30px]"
          >
            <span
              class="text-black font-Golos font-semibold text-[22px] mobile:text-[25px] 1025:text-[36px] mobile:leading-[29px] 1025:leading-[40px] tracking-0"
            >
              Одна подписка <span class="text-primary"> для всех </span>
            </span>
            <span
              class="text-black font-Golos text-sm mobile:text-[17px] 1025:text-lg leading-[18px] 1025:max-w-[358px]"
            >
              Подключайте
              <span class="text-primary"> сколько угодно <br /> </span>
              устройств и пользуйтесь
              <span class="text-primary"> безлимитным трафиком </span> !
            </span>
          </div>
          <div
            class="flex flex-col rounded-[20px] mobile:rounded-[20px] 1025:rounded-[40px] bg-[#F5F7FA] gap-[7px] mobile:gap-[13px] 1025:gap-[19px] px-[26px] mobile:px-[28px] 1025:px-[39px] py-[21px] mobile:py-[26px] 1025:py-[30px]"
          >
            <span
              class="text-black font-Golos max-w-[336px] font-semibold text-[22px] mobile:text-[23px] 1025:text-[36px] mobile:leading-[29px] 1025:leading-[40px] tracking-0"
            >
              Гарантия
              <span class="text-primary">качества </span> и
              <span class="text-primary">выбора </span>
            </span>
            <span
              class="text-black font-Golos text-sm mobile:text-[17px] 1025:text-lg leading-[18px] max-w-[350px]"
            >
              Нам <span class="text-primary">доверились</span> более<span
                class="text-primary"
              >
                3500</span
              >
              человек!
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
