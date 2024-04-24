<script setup>
import { RouterView } from "vue-router"
import TopNavigation from "./components/topNavigation/TopNavigation.vue"
import BottomNavigation from "./components/bottomNavigation/BottomNavigation.vue"
</script>

<template>
  <TopNavigation />
  <RouterView />
  <BottomNavigation />
</template>
