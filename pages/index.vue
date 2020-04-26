<template lang="pug">
.page-index
  .page-index__container
    .page-index__container--left
      h1 Hello world!
    .page-index__container--right
      .page-index__projects
        ProjectCard(v-for="project in projects" :key="project.key" :project="project")
</template>

<script lang="ts">
import ProjectJson from "@/data/projects.json"

export default {
  name: "PageIndex",
  components: {
    ProjectCard: () => import("@/components/ProjectCard/ProjectCard.vue"),
  },
  data() {
    return {
      projects: ProjectJson,
    }
  },
}
</script>

<style lang="scss" scoped>
.page-index {
  &__container {
    position: relative;

    &--left {
      box-sizing: border-box;
      padding-bottom: 3rem;

      @include breakpoint(l) {
        position: fixed;
        width: 40%;
        height: 100%;
        padding: 3rem;
      }

      @include breakpoint(xl) {
        width: 600px;
      }
    }
    &--right {
      box-sizing: border-box;

      @include breakpoint(l) {
        position: absolute;
        width: 60%;
        right: 0;
        padding: 3rem;
      }

      @include breakpoint(xl) {
        width: 800px;
      }
    }
  }

  &__projects {
    @include hover-focus-active() {
      .project-card {
        opacity: 0.5;
      }
    }

    .project-card {
      @include hover-focus-active() {
        opacity: 1 !important;
      }
    }
  }
}
</style>
