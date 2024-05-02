<script setup>
import { computed } from "vue"
import PlacaholderImageAvatar from "../assets/placeholderAvatar.jpg";

const props = defineProps({
    image: {
        type: String,
        default: PlacaholderImageAvatar
    }
})

const avatarSrc = computed(() => {
    return props.image || PlacaholderImageAvatar;
});
</script>


<template>
    <div class="wrapper_avatar">
        <img :src="avatarSrc" alt="avatar" class="avatar">
    </div>
</template>

<style scoped>
.wrapper_avatar {
    min-width: var(--wh_image);
    max-width: var(--wh_image);
    min-height: var(--wh_image);
    max-height: var(--wh_image);

    overflow: hidden;

    border-radius: 50%;

    & img {
        width: var(--wh_image);
        height: var(--wh_image);
        object-fit: cover;
    }
}
</style>