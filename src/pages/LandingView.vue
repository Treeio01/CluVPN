<template>
  <div class="flex w-full justify-center bg-bg">
    <div class="flex flex-col items-center w-full max-w-[1440px]">

      <Header></Header>
      <Main></Main>
      <Conditions></Conditions>
      <div class="flex flex-col items-center w-full pt-[61px] bg-white z-30">
        <div class="flex flex-col items-center w-full  rounded-t-[50px] mobile:rounded-t-[100px] pb-[54px] bg-bg">
          <Prices></Prices>
          <Advantages></Advantages>
          <FAQ></FAQ>
          <Banner></Banner>
          <Footer></Footer>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import Header from "../components/Landing/Header.vue";
import Main from "../components/Landing/Sections/Main.vue";
import Conditions from "../components/Landing/Sections/Conditions.vue"
import Prices from "../components/Landing/Sections/Prices.vue"
import Advantages from "../components/Landing/Sections/Advantages.vue";
import FAQ from "../components/Landing/Sections/FAQ.vue";
import Banner from "../components/Landing/Sections/Banner.vue";
import Footer from "../components/Landing/Sections/Footer.vue"
</script>
