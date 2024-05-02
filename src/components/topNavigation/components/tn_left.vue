<template>
    <div class="tn_left">
        <div class="arrow">
          <i class="ri-arrow-left-line"></i>
        </div>
    </div>
</template>

<style scoped>
.tn_left {
  min-width: var(--tn_left-width);
  max-width: var(--tn_left-width);
  min-height: var(--heigth_top-navigation);
  max-height: var(--heigth_top-navigation);
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}

.arrow {
  min-width: var(--g-icon-width);
  max-width: var(--g-icon-width);
  min-height: var(--g-icon-height);
  max-height: var(--g-icon-height);

  border-radius: var(--g-radius);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  & i {
    font-size: var(--g-icon-font-size);
  }
}

.arrow:hover {
  transition: all ease .4s;
  box-shadow: inset 0 0 6px #ddd;
}

.arrow:active {
  scale: .95;
}
</style>