export interface NuxtConfigurationStyleResources {
  sass?: string[] | string
  scss?: string[] | string
  less?: string[] | string
  stylus?: string[] | string
}

const styleResources: NuxtConfigurationStyleResources = {
  scss: ["~assets/scss/colors.scss", "~assets/scss/variables.scss", "~assets/scss/mixins/*.scss"],
}

export default styleResources
