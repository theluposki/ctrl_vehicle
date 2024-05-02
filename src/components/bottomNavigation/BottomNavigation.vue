<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
    <div class="bottom-navigation">
        <RouterLink to="/" >
            <i class="ri-dashboard-line"></i>
        </RouterLink>
        <RouterLink to="/about" >
            <i class="ri-information-line"></i>
        </RouterLink>
    </div>
</template>

<style scoped>
.bottom-navigation {
    position: fixed;
    bottom: 0;
    left: 0;

    min-width: 100%;
    min-height: var(--heigth_bottom-navigation);
    max-height: var(--heigth_bottom-navigation);
    background-color: aliceblue;
}
</style>