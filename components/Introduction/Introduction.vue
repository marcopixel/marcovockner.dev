<template lang="pug">
  .introduction
    h1.introduction__header Hi, I'm #[br] #[em Marco Vockner.]
    .introduction__text
      p I'm a Front-End Developer/Designer living in Austria who likes to create stuff for people to enjoy.#[br]
      p I love working with #[a(href="https://www.typescriptlang.org/") Typescript] & #[a(href="https://reactjs.org/") React] and recently started with #[a(href="https://vuejs.org/") Vue.js], which I simply adore because of it's simplicity & ease of use.
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
      font-size: 3rem;
      margin-top: 0;
      margin-bottom: 3rem;
    }

    @include breakpoint(xl) {
      font-size: 4rem;
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
