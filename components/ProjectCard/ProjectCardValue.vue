<template lang="pug">
  .project-card-value
    FontAwesomeIcon.project-card-value__icon(:icon="icon")
    span.project-card-value__value {{ value }}
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    icon: {
      type: [String, Array],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project-card-value {
  align-items: center;
  display: flex;
  transition: opacity 500ms;

  &.fade-enter {
    opacity: 0;
  }

  &:not(:last-of-type) {
    margin-right: 1.4rem;
  }

  &__icon {
    margin-right: 0.6em;
  }

  &__value {
    font-weight: 600;
  }
}
</style>
