<script setup>
import { ref } from "vue"
import Emitter from "../../../utils/Emitter.js"

const title = ref("")

Emitter.on("setTitle", (data) => {
  title.value = data
})
</script>

<template>
    <div class="tn_center">
        {{ title }}
    </div>
</template>

<style scoped>
.tn_center {
  min-width: var(--tn_center-width);
  max-width: var(--tn_center-width);
  min-height: var(--heigth_top-navigation);
  max-height: var(--heigth_top-navigation);
  
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>