<template lang="pug">
  .layout-default
    Nuxt
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
@import "normalize.css";
@import "~assets/scss/base";

.layout-default {
  margin: 0 auto;

  @include breakpoint(l) {
    max-width: 1200px;
  }
}
</style>
