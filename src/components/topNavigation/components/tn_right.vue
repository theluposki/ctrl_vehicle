<script setup>
import Avatar from '../../avatar.vue';
</script>

<template>
    <div class="tn_right">
     <Avatar image="https://i.pravatar.cc/150?img=3"/>
    </div>
</template>

<style scoped>
.tn_right {
  min-width: var(--tn_right-width);
  max-width: var(--tn_right-width);
  min-height: var(--heigth_top-navigation);
  max-height: var(--heigth_top-navigation);
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
}
</style>