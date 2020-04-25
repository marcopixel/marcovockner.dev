<template lang="pug">
  a.project-card(:href="project.website")
    .project-card__image(v-if="project.preview")
      img(:src="project.preview.src" :alt="project.preview.alt")
    .project-card__content
      h3.project-card__header {{ project.name }}
      span.project-card__description {{ project.description }}
      .project-card__footer
        span.project-card__language {{ project.language }}
        .project-card__stats
          transition(name="fade")
            .project-card__stats__placeholder(v-if="isLoading || hasError" :class="{ error: hasError }")
          transition(name="fade")
            ProjectCardValue(v-if="!isLoading && !hasError" icon="star" :value="stars")
          transition(name="fade")
            ProjectCardValue(v-if="!isLoading && !hasError" icon="code-branch" :value="forks")

</template>

<script lang="ts">
import { PropOptions } from "vue"
import { ProjectEntry } from "@/types/data"

export default {
  name: "ProjectCard",

  components: {
    ProjectCardValue: () => import("~/components/ProjectCard/ProjectCardValue.vue"),
  },

  props: {
    project: {
      type: Object,
      required: true,
    } as PropOptions<ProjectEntry>,
  },

  data() {
    return {
      hasError: false,
      isLoading: true,
    }
  },

  computed: {
    github() {
      return this.$store.state.github.find((i) => i.key === this.project.key)
    },

    stars() {
      return this.github ? this.github.response.stargazers_count : 0
    },

    forks() {
      return this.github ? this.github.response.forks_count : 0
    },
  },

  async mounted() {
    // wait for store to load
    await this.$store.state

    // check if store has the github property or if element is expired
    if (!this.github || this.$moment().isAfter(this.github.expiresAt)) {
      try {
        await this.$store.dispatch("fetchGithubStats", this.project)
      } catch (error) {
        this.hasError = true
      }
    }

    // toggle loading boolean to show/hide elements
    this.isLoading = false
  },
}
</script>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  color: $color-text-primary;
  background: lighten($color-background, 4%);
  margin-bottom: 2rem;
  text-decoration: none;
  transition-duration: 200ms;
  transition-property: opacity, transform;

  @include hover-focus-active() {
    transform: scale(1.02);
  }

  &__image {
    background: rgba(0, 0, 0, 0.1);
    height: 200px;

    img {
      height: 100%;
      object-fit: cover;
      object-position: 50% 20%;
      width: 100%;
    }
  }

  &__header {
    color: $color-text-accent;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0;
  }

  &__content {
    padding: 2.5rem 2rem;
    line-height: 1.5;
  }

  &__footer {
    align-items: center;
    display: flex;
    margin-top: 2.5rem;
  }

  &__language {
    color: $color-text-secondary;
    flex-grow: 1;
    font-weight: 600;
    text-transform: uppercase;
  }

  &__stats {
    color: $color-text-secondary;
    display: flex;
    align-items: center;
    position: relative;
  }
}
</style>
