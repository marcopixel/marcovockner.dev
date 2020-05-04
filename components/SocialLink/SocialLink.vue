<template lang="pug">
li.social-link
  a(:href="href" target="_blank")
    FontAwesomeIcon(v-if="icon" :icon="icon")
    span {{ label }}
</template>

<script lang="ts">
export default {
  name: "SocialLink",

  props: {
    href: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.social-link {
  color: lighten($color-text-primary, 10%);
  margin-right: 2rem;
  transition: 100ms transform;

  @include hover-focus-active() {
    color: #fff;
  }

  &:last-child {
    margin-right: 0;
  }

  a {
    color: inherit;
    display: flex;
    align-items: center;
  }

  span {
    font-weight: 600;
  }

  svg {
    margin-right: 0.8rem;
  }
}
</style>
