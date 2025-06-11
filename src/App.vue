<script setup>
import HomeView from "@/views/HomeView.vue";
import TheNavBar from "@/components/ui/TheNavBar.vue";
import TheFooter from "@/components/ui/TheFooter.vue";
import TheLayoutView from "@/components/ui/TheLayoutView.vue";
</script>

<template>
  <header>
    <TheNavBar/>
  </header>

  <main>
    <HomeView/>
    <the-layout-view></the-layout-view>
  </main>
  <the-footer/>
</template>

<style>

</style>
