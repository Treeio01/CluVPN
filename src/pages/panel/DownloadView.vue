<script setup lang="ts">
import LayoutPanel from "../../components/Panel/LayoutPanel.vue";
import Modal from "../../components/Panel/Modal.vue";
</script>

<template>
  <LayoutPanel>
    <template #content>
      <div
        class="flex flex-col gap-[23px] w-full max-w-[1043px] bg-panel-blue py-[20px] md:py-[38px] px-[20px] md:px-[47px] md:rounded-[70px] rounded-[40px]"
      >
        <div class="flex w-full gap-[19px] 1240:flex-row flex-col">
          <div
            class="flex flex-col h-max bg-primary md:rounded-[60px] rounded-[40px] w-full max-w-full 1240:max-w-[464px]"
          >
            <div
              class="flex md:px-[67px] px-[20px] md:pt-[48px] pt-[20px] pb-[19px]"
            >
              <span
                class="text-white p-2.5 font-Days md:text-[34px] text-xl text-center w-full"
              >
                VPN на телефон
              </span>
            </div>
            <div
              class="flex w-full py-[19px] md:px-[57px] px-[20px] bg-panel-blue/60"
            >
              <span
                class="p-2.5 text-white text-center leading-[31px] font-Golos md:text-[31px] text-xl"
              >
                Интернет всегда с тобой — быстро и без блокировок
              </span>
            </div>
            <div
              class="flex items-center flex-col gap-2 px-[21px] pt-[19px] pb-5 w-full"
            >
              <div
                class="flex items-center justify-center gap-2 w-full md:flex-row flex-col"
              >
                <div
                  class="flex py-3 px-2 w-full md:max-w-[135px] max-w-full justify-center rounded-[40px] bg-panel-blue/60 gap-2 items-center"
                >
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.3751 24.45C25.1126 23.325 25.3876 22.75 25.9501 21.4875C21.8001 19.9125 21.1376 14 25.2376 11.7375C23.9876 10.1625 22.2251 9.25 20.5626 9.25C19.3626 9.25 18.5376 9.56251 17.8001 9.85001C17.1751 10.0875 16.6126 10.3 15.9126 10.3C15.1626 10.3 14.5001 10.0625 13.8001 9.81252C13.0376 9.53752 12.2376 9.25 11.2376 9.25C9.37508 9.25 7.38758 10.3875 6.12508 12.3375C4.35008 15.0875 4.66259 20.2375 7.52509 24.6375C8.55009 26.2125 9.92508 27.975 11.7126 28C12.4626 28.0125 12.9501 27.7875 13.4876 27.55C14.1001 27.275 14.7626 26.975 15.9251 26.975C17.0876 26.9625 17.7376 27.275 18.3501 27.55C18.8751 27.7875 19.3501 28.0125 20.0876 28C21.9001 27.975 23.3501 26.025 24.3751 24.45Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.2996 3C20.4996 4.375 19.9371 5.73752 19.1996 6.68752C18.4121 7.71252 17.0371 8.51249 15.7121 8.46249C15.4746 7.13749 16.0871 5.77499 16.8371 4.86249C17.6746 3.86249 19.0871 3.0875 20.2996 3Z"
                      fill="white"
                    />
                  </svg>
                  <span class="text-white font-Golos md:text-[20px] text-xl">
                    IOS
                  </span>
                </div>
                <div
                  class="flex py-3 px-2 w-full md:max-w-[135px] max-w-full rounded-[40px] justify-center bg-panel-blue/60 gap-2 items-center"
                >
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.75 23V26.75C13.75 27.4375 13.1875 28 12.5 28C11.8125 28 11.25 27.4375 11.25 26.75V23H13.75Z"
                      fill="white"
                    />
                    <path
                      d="M18.75 23V26.75C18.75 27.4375 18.1875 28 17.5 28C16.8125 28 16.25 27.4375 16.25 26.75V23H18.75Z"
                      fill="white"
                    />
                    <path
                      d="M21.25 14.25V20.5C21.25 21.875 20.125 23 18.75 23H11.25C9.875 23 8.75 21.875 8.75 20.5V14.25C8.75 12.875 9.875 11.75 11.25 11.75H18.75C20.125 11.75 21.25 12.875 21.25 14.25Z"
                      fill="white"
                    />
                    <path
                      d="M6.25 14.25V19.25C6.25 19.9375 5.6875 20.5 5 20.5C4.3125 20.5 3.75 19.9375 3.75 19.25V14.25C3.75 13.5625 4.3125 13 5 13C5.6875 13 6.25 13.5625 6.25 14.25Z"
                      fill="white"
                    />
                    <path
                      d="M26.25 14.25V19.25C26.25 19.9375 25.6875 20.5 25 20.5C24.3125 20.5 23.75 19.9375 23.75 19.25V14.25C23.75 13.5625 24.3125 13 25 13C25.6875 13 26.25 13.5625 26.25 14.25Z"
                      fill="white"
                    />
                    <path
                      d="M12 10H18C19.1 10 20 9.1 20 8C20 5.2375 17.7625 3 15 3C12.2375 3 10 5.2375 10 8C10 9.1 10.9 10 12 10Z"
                      fill="white"
                    />
                  </svg>

                  <span class="text-white font-Golos md:text-[20px] text-xl">
                    Android
                  </span>
                </div>
                <div
                  class="flex py-3 w-full md:max-w-[135px] max-w-full px-2 rounded-[40px] justify-center bg-panel-blue/60 gap-2 items-center"
                >
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.24031 2.375C3.84748 2.375 1.875 4.34713 1.875 9.73888V21.2611C1.875 26.6529 3.84748 28.625 9.24031 28.625H20.7562C26.1489 28.625 28.125 26.6529 28.125 21.2611V9.73888C28.125 4.34713 26.1525 2.375 20.7597 2.375H9.24031Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.3255 17.5995H14.3793L13.8506 16.3699L13.3255 17.5995ZM13.066 18.2191L12.7533 18.9345H12.0414L13.5552 15.5002H14.1704L15.6781 18.9345H14.9473L14.6386 18.2191H13.066ZM24.5207 18.932H25.2087V15.5H24.5207V18.932ZM21.7824 17.4577H23.0506V16.8319H21.7824V16.1285H23.6234V15.5025H21.0946V18.9343H23.6896V18.3083H21.7824V17.4577ZM19.0487 17.8632L18.2687 15.5H17.6995L16.9195 17.8632L16.1604 15.5019H15.4182L16.6161 18.9364H17.1931L17.9744 16.6804L18.7556 18.9364H19.3377L20.5325 15.5019H19.8095L19.0487 17.8632ZM10.9912 17.4672C10.9912 18.0258 10.7138 18.3244 10.2099 18.3244C9.70338 18.3244 9.42446 18.0172 9.42446 17.4433V15.5023H8.72718V17.4672C8.72718 18.4337 9.26433 18.9879 10.2004 18.9879C11.1458 18.9879 11.6878 18.4231 11.6878 17.4385V15.5002H10.9912V17.4672ZM7.06361 15.5002H7.76047V18.9366H7.06361V17.541H5.48928V18.9366H4.79199V15.5002H5.48928V16.8863H7.06361V15.5002Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 11.125C12.5874 11.125 10.625 9.16241 10.625 6.75H11.243C11.243 8.82146 12.9285 10.5068 15 10.5068C17.0715 10.5068 18.757 8.82146 18.757 6.75H19.375C19.375 9.16241 17.4124 11.125 15 11.125Z"
                      fill="black"
                    />
                  </svg>

                  <span class="text-white font-Golos md:text-[20px] text-xl">
                    Huawei
                  </span>
                </div>
              </div>
              <span
                class="text-[#DFDFDF] font-Golos md:text-[23px] text-xl p-2.5"
              >
                выберите свое устройство
              </span>
            </div>
          </div>

          <div
            class="flex flex-col h-max items-center bg-primary md:rounded-[60px] rounded-[40px] w-full max-w-full 1240:max-w-[464px]"
          >
            <div class="flex px-[20px] md:pt-[48px] pt-[20px] pb-[19px]">
              <span
                class="text-white p-2.5 font-Days md:text-[34px] text-xl text-center w-full"
              >
                VPN на компьютер
              </span>
            </div>
            <div
              class="flex w-full py-[4px] md:px-[57px] px-[20px] bg-panel-blue/60"
            >
              <span
                class="p-2.5 text-white text-center font-Golos leading-[31px] md:text-[31px] text-xl"
              >
                Видео и сайты в лучшем качестве. Никаких преград и реклам
              </span>
            </div>
            <div
              class="flex items-center flex-col gap-2 px-[21px] pt-[19px] pb-5 w-full"
            >
              <div
                class="flex items-center justify-center gap-2 w-full md:flex-row flex-col"
              >
                <div
                  class="flex py-3 px-2 w-full md:max-w-[135px] max-w-full justify-center rounded-[40px] bg-panel-blue/60 gap-2 items-center"
                >
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.3751 24.45C25.1126 23.325 25.3876 22.75 25.9501 21.4875C21.8001 19.9125 21.1376 14 25.2376 11.7375C23.9876 10.1625 22.2251 9.25 20.5626 9.25C19.3626 9.25 18.5376 9.56251 17.8001 9.85001C17.1751 10.0875 16.6126 10.3 15.9126 10.3C15.1626 10.3 14.5001 10.0625 13.8001 9.81252C13.0376 9.53752 12.2376 9.25 11.2376 9.25C9.37508 9.25 7.38758 10.3875 6.12508 12.3375C4.35008 15.0875 4.66259 20.2375 7.52509 24.6375C8.55009 26.2125 9.92508 27.975 11.7126 28C12.4626 28.0125 12.9501 27.7875 13.4876 27.55C14.1001 27.275 14.7626 26.975 15.9251 26.975C17.0876 26.9625 17.7376 27.275 18.3501 27.55C18.8751 27.7875 19.3501 28.0125 20.0876 28C21.9001 27.975 23.3501 26.025 24.3751 24.45Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.2996 3C20.4996 4.375 19.9371 5.73752 19.1996 6.68752C18.4121 7.71252 17.0371 8.51249 15.7121 8.46249C15.4746 7.13749 16.0871 5.77499 16.8371 4.86249C17.6746 3.86249 19.0871 3.0875 20.2996 3Z"
                      fill="white"
                    />
                  </svg>
                  <span class="text-white font-Golos md:text-[20px] text-xl">
                    macOS
                  </span>
                </div>
                <div
                  class="flex py-3 px-2 w-full md:max-w-[135px] max-w-full rounded-[40px] justify-center bg-panel-blue/60 gap-2 items-center"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.3 2.73998L13.3 4.33998C12.83 4.42998 12.5 4.83999 12.5 5.31999V10.5C12.5 11.05 12.95 11.5 13.5 11.5H21.5C22.05 11.5 22.5 11.05 22.5 10.5V3.71999C22.5 3.08999 21.92 2.61998 21.3 2.73998Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.3 22.26L13.3 20.66C12.83 20.57 12.5 20.16 12.5 19.68V14.5C12.5 13.95 12.95 13.5 13.5 13.5H21.5C22.05 13.5 22.5 13.95 22.5 14.5V21.28C22.5 21.91 21.92 22.38 21.3 22.26Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.28998 5.05996L3.28998 6.32995C2.82998 6.42995 2.5 6.83996 2.5 7.30996V10.5C2.5 11.05 2.95 11.5 3.5 11.5H9.5C10.05 11.5 10.5 11.05 10.5 10.5V6.02996C10.5 5.39996 9.90998 4.91996 9.28998 5.05996Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.28998 19.94L3.28998 18.67C2.82998 18.57 2.5 18.16 2.5 17.69V14.5C2.5 13.95 2.95 13.5 3.5 13.5H9.5C10.05 13.5 10.5 13.95 10.5 14.5V18.97C10.5 19.6 9.90998 20.08 9.28998 19.94Z"
                      fill="white"
                    />
                  </svg>

                  <span class="text-white font-Golos md:text-[20px] text-xl">
                    Windows
                  </span>
                </div>
                <div
                  class="flex py-3 w-full md:max-w-[135px] max-w-full px-2 rounded-[40px] justify-center bg-panel-blue/60 gap-2 items-center"
                >
                  <span class="text-white font-Golos md:text-[20px] text-xl">
                    Linux
                  </span>
                </div>
              </div>
              <span
                class="text-[#DFDFDF] font-Golos md:text-[23px] text-xl p-2.5"
              >
                выберите свое устройство
              </span>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col h-max bg-primary md:rounded-[60px] rounded-[40px] w-full items-center"
        >
          <div
            class="flex md:px-[67px] px-[20px] md:pt-[48px] pt-[20px] pb-[19px]"
          >
            <span
              class="text-white p-2.5 font-Days md:text-[34px] text-xl text-center w-full"
            >
              VPN на телевизор
            </span>
          </div>
          <div
            class="flex w-full justify-center py-[19px] md:px-[57px] px-[20px] bg-panel-blue/60"
          >
            <span
              class="p-2.5 text-white text-center leading-[31px] font-Golos md:text-[31px] text-xl"
            >
              Кино и ютуб в 4K — без запретов и пауз
            </span>
          </div>
          <div
            class="flex items-center flex-col gap-2 px-[21px] pt-[19px] pb-5 w-full"
          >
            <div
              class="flex items-center justify-center gap-5 w-full md:flex-row flex-col"
            >
              <div
                class="flex py-3 px-2 w-full md:max-w-[270px] max-w-full justify-center rounded-[40px] bg-panel-blue/60 gap-2 items-center"
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.3751 24.45C25.1126 23.325 25.3876 22.75 25.9501 21.4875C21.8001 19.9125 21.1376 14 25.2376 11.7375C23.9876 10.1625 22.2251 9.25 20.5626 9.25C19.3626 9.25 18.5376 9.56251 17.8001 9.85001C17.1751 10.0875 16.6126 10.3 15.9126 10.3C15.1626 10.3 14.5001 10.0625 13.8001 9.81252C13.0376 9.53752 12.2376 9.25 11.2376 9.25C9.37508 9.25 7.38758 10.3875 6.12508 12.3375C4.35008 15.0875 4.66259 20.2375 7.52509 24.6375C8.55009 26.2125 9.92508 27.975 11.7126 28C12.4626 28.0125 12.9501 27.7875 13.4876 27.55C14.1001 27.275 14.7626 26.975 15.9251 26.975C17.0876 26.9625 17.7376 27.275 18.3501 27.55C18.8751 27.7875 19.3501 28.0125 20.0876 28C21.9001 27.975 23.3501 26.025 24.3751 24.45Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.2996 3C20.4996 4.375 19.9371 5.73752 19.1996 6.68752C18.4121 7.71252 17.0371 8.51249 15.7121 8.46249C15.4746 7.13749 16.0871 5.77499 16.8371 4.86249C17.6746 3.86249 19.0871 3.0875 20.2996 3Z"
                    fill="white"
                  />
                </svg>
                <span class="text-white font-Golos md:text-[20px] text-xl">
                  Apple TV
                </span>
              </div>
              <div
                class="flex py-3 px-2 w-full md:max-w-[270px] max-w-full rounded-[40px] justify-center bg-panel-blue/60 gap-2 items-center"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 22.5V26.25C13.75 26.9375 13.1875 27.5 12.5 27.5C11.8125 27.5 11.25 26.9375 11.25 26.25V22.5H13.75Z"
                    fill="white"
                  />
                  <path
                    d="M18.75 22.5V26.25C18.75 26.9375 18.1875 27.5 17.5 27.5C16.8125 27.5 16.25 26.9375 16.25 26.25V22.5H18.75Z"
                    fill="white"
                  />
                  <path
                    d="M21.25 13.75V20C21.25 21.375 20.125 22.5 18.75 22.5H11.25C9.875 22.5 8.75 21.375 8.75 20V13.75C8.75 12.375 9.875 11.25 11.25 11.25H18.75C20.125 11.25 21.25 12.375 21.25 13.75Z"
                    fill="white"
                  />
                  <path
                    d="M6.25 13.75V18.75C6.25 19.4375 5.6875 20 5 20C4.3125 20 3.75 19.4375 3.75 18.75V13.75C3.75 13.0625 4.3125 12.5 5 12.5C5.6875 12.5 6.25 13.0625 6.25 13.75Z"
                    fill="white"
                  />
                  <path
                    d="M26.25 13.75V18.75C26.25 19.4375 25.6875 20 25 20C24.3125 20 23.75 19.4375 23.75 18.75V13.75C23.75 13.0625 24.3125 12.5 25 12.5C25.6875 12.5 26.25 13.0625 26.25 13.75Z"
                    fill="white"
                  />
                  <path
                    d="M12 9.50001H18C19.1 9.50001 20 8.6 20 7.5C20 4.7375 17.7625 2.5 15 2.5C12.2375 2.5 10 4.7375 10 7.5C10 8.6 10.9 9.50001 12 9.50001Z"
                    fill="white"
                  />
                </svg>

                <span class="text-white font-Golos text-[20px]">
                  Android TV
                </span>
              </div>
              <div
                class="flex py-3 w-full md:max-w-[270px] max-w-full px-2 rounded-[40px] justify-center bg-panel-blue/60 gap-2 items-center"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7754 8.625C18.3504 7.85 21.9754 7.7375 25.5629 8.325C23.3504 4.825 19.4504 2.5 15.0004 2.5C11.1129 2.5 7.63789 4.275 5.33789 7.0625C5.88789 8.6875 6.58789 10.2375 7.42539 11.7125C7.90039 12.5625 9.11289 12.525 9.60039 11.6875C10.6629 9.9 12.5754 8.7 14.7754 8.625Z"
                    fill="white"
                  />
                  <path
                    d="M9.65002 18.4C7.15002 15.725 5.20002 12.675 3.86252 9.29999C1.98752 13 2.00002 17.5375 4.28752 21.35C6.28752 24.6875 9.58752 26.7625 13.1625 27.3C14.275 25.9875 15.25 24.5875 16.0875 23.125C16.575 22.275 15.9125 21.2625 14.9375 21.2625C12.85 21.275 10.8375 20.25 9.65002 18.4Z"
                    fill="white"
                  />
                  <path
                    d="M10.7129 15C10.7129 15.7625 10.9004 16.475 11.2879 17.15C12.0504 18.4625 13.4629 19.2875 14.9879 19.2875C16.5129 19.2875 17.9379 18.4625 18.6879 17.15C19.0754 16.475 19.2754 15.7625 19.2754 15C19.2754 12.6375 17.3504 10.725 14.9879 10.725C12.6379 10.7125 10.7129 12.6375 10.7129 15Z"
                    fill="white"
                  />
                  <path
                    d="M26.6752 10.525C24.9627 10.1625 23.2252 9.96249 21.5002 9.93749C20.5127 9.92499 19.9502 11 20.4377 11.8625C20.9377 12.75 21.2252 13.775 21.2252 14.8625C21.2252 15.9125 20.9502 16.95 20.4377 17.875C19.2627 21.475 17.5127 24.675 15.2002 27.5C22.0127 27.3875 27.5002 21.8375 27.5002 15C27.5002 13.425 27.2127 11.9125 26.6752 10.525Z"
                    fill="white"
                  />
                </svg>

                <span class="text-white font-Golos text-[20px]">
                  Google TV
                </span>
              </div>
            </div>
            <span
              class="text-[#DFDFDF] font-Golos md:text-[23px] text-xl p-2.5 text-center"
            >
              выберите свое устройство
            </span>
          </div>
        </div>
      </div>
    </template>
  </LayoutPanel>
</template>

<style scoped></style>
