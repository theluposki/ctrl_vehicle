<script setup>
import { ref, onMounted } from "vue"
import Emitter from "../../utils/Emitter.js"

const title = ref("Ínicio")

onMounted(() => {
    Emitter.emit("setTitle", title.value)
})

</script>

<template>
    <div class="page">
        <h1>{{ title }}</h1>
        <i class="ri-arrow-left-line"></i>
    </div>
</template>