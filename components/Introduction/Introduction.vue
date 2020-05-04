<template lang="pug">
  .introduction
    h1.introduction__header Hi, I'm #[em Marco.]
    .introduction__text
      p I'm a Front-End Developer/Designer living in Austria who loves to create stuff for people to enjoy.#[br]
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
.introduction {
  @include breakpoint(xl) {
    width: 75%;
  }

  &__header {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @include breakpoint(l) {
      font-size: 4rem;
      margin-top: 0;
      margin-bottom: 3rem;
    }

    em {
      color: $color-text-accent;
      font-style: normal;
    }
  }

  &__text {
    text-align: justify;
    line-height: 1.5;
    margin-bottom: 2rem;

    a {
      font-weight: 600;
    }
  }
}
</style>
