<template lang="pug">
  .introduction
    h1 Hi, I'm #[em Marco.]
    p I'm a Front-End Developer/Designer living in Austria who loves to create stuff for people to enjoy.#[br]
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
.introduction {
  @include breakpoint(l) {
    width: 80%;
  }

  h1 {
    font-size: 4rem;
    margin-top: 0;
    margin-bottom: 3rem;

    em {
      color: $color-text-accent;
      font-style: normal;
    }
  }

  p {
    text-align: justify;
    line-height: 1.5;

    a {
      font-weight: 600;
    }
  }
}
</style>
