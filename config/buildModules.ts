import { NuxtConfigurationModule } from "@nuxt/types/config/module"

const buildModules: NuxtConfigurationModule[] = [
  "@nuxt/typescript-build",
  "@nuxtjs/eslint-module",
  "@nuxtjs/stylelint-module",
  "@nuxtjs/moment",
  "@nuxtjs/fontawesome",
  "@aceforth/nuxt-optimized-images",
]

export default buildModules
