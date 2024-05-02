<script setup>
import tnLeft from "./components/tn_left.vue";
import tnCenter from "./components/tn_center.vue";
import tnRight from "./components/tn_right.vue";


</script>

<template>
    <div class="top-navigation">
        <tnLeft />
        <tnCenter />
        <tnRight />
    </div>
</template>

<style scoped>
.top-navigation {
  min-height: var(--heigth_top-navigation);
  max-height: var(--heigth_top-navigation);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 var(--g-padding);

  --tn_left-width: 25%;
  --tn_center-width: 50%;
  --tn_right-width: 25%;
}
</style>