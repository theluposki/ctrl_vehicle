<script setup>
import { ref, onMounted } from "vue"
import Emitter from "../../utils/Emitter.js"

const title = ref("Sobre")

onMounted(() => {
    Emitter.emit("setTitle", title.value)
})

</script>

<template>
    <div class="page">
        <h1>About</h1>
    </div>
</template>