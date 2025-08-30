<template>
  <div class="flex w-full flex-col items-center bg-bg">
    <Header></Header>
    <Main></Main>
    <Conditions></Conditions>
    <Prices></Prices>
  </div>
</template>
<script setup>
import Header from "../components/Landing/Header.vue";
import Main from "../components/Landing/Sections/Main.vue";
import Conditions from "../components/Landing/Sections/Conditions.vue"

import Prices from "../components/Landing/Sections/Prices.vue"

</script>
