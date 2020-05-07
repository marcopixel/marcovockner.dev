<template lang="pug">
  a.project-card(:href="project.website")
    .project-card__image(v-if="project.preview")
      img(:src="image" :alt="project.preview.alt" :style="position")
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
          //- transition(name="fade")
          //-   ProjectCardValue(v-if="!isLoading && !hasError" icon="code-branch" :value="forks")

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
    position() {
      return `object-position: ${
        this.project.preview.position ? this.project.preview.position : "50% 50%"
      }`
    },
    image() {
      return require(`~/assets/${this.project.preview.src}`)
    },
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
  color: lighten($color-text-primary, 20%);
  background: lighten($color-background, 6%);
  margin-bottom: 1rem;
  text-decoration: none;
  transition-duration: 200ms;
  transition-property: opacity, transform;

  @include hover-focus-active() {
    transform: scale(1.02);
    color: lighten($color-text-primary, 20%);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &__image {
    position: relative;
    background: rgba(0, 0, 0, 0.1);
    height: 150px;
    overflow: hidden;

    @include breakpoint(m) {
      height: 200px;
    }

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
      opacity: 0;
      transition: 200ms opacity;

      /* stylelint-disable-next-line selector-class-pattern */
      &.isLoaded {
        opacity: 1;
      }

      // ie workaround
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        position: absolute;
        top: 50%;
        left: 50%;
        height: auto;
        min-height: 100%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &__header {
    color: $color-text-accent;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5rem;

    @include breakpoint(m) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  &__content {
    padding: 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.03em;

    @include breakpoint(m) {
      padding: 2rem;
      font-size: 1.1rem;
    }
  }

  &__footer {
    align-items: center;
    display: flex;
    margin-top: 1.5rem;

    @include breakpoint(m) {
      margin-top: 2.5rem;
    }
  }

  &__language {
    color: $color-text-secondary;
    flex-grow: 1;
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
