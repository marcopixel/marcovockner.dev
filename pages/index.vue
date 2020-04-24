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
    display: grid;
    grid-template-columns: 1fr;
    padding: 4rem 0;

    @include breakpoint(l) {
      grid-template-columns: 2fr 3fr;
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
