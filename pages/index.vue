<template lang="pug">
.page-index
  .page-index__container
    .page-index__container--left
      .page-index__intro
        Introduction
      ul.page-index__social
        SocialLink(href="https://twitter.com/marcovockner" label="Twitter" :icon="['fab', 'twitter']")
        SocialLink(href="https://github.com/marcopixel" label="Github" :icon="['fab', 'github']")
        SocialLink(href="https://www.reddit.com/user/marcopixel" label="Reddit" :icon="['fab', 'reddit']")
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
    Introduction: () => import("@/components/Introduction/Introduction.vue"),
    SocialLink: () => import("@/components/SocialLink/SocialLink.vue"),
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
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-bottom: 3rem;

      @include breakpoint(l) {
        position: fixed;
        width: 40%;
        height: 100%;
        padding-top: 5rem;
        padding-bottom: 5rem;
        padding-left: 3rem;
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
        padding: 5rem 3rem;
      }

      @include breakpoint(xl) {
        width: 800px;
      }
    }
  }

  &__intro {
    flex-grow: 1;
  }

  &__social {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
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
