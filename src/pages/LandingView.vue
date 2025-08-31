<template>
  <div class="flex w-full justify-center bg-bg">
    <div class="flex flex-col items-center w-full max-w-[1440px]">

      <Header></Header>
      <Main></Main>
      <Conditions></Conditions>
      <div class="flex flex-col items-center w-full relative top-[-198px] bg-bg z-30 rounded-t-[100px]">
        <Prices></Prices>
        <Advantages></Advantages>
        <FAQ></FAQ>
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
</script>
