export interface NuxtConfigurationFontAwesome {
  component?: string
  suffix?: boolean
  addCss?: boolean
  useLayers?: boolean
  useLayersText?: boolean
  icons?: NuxtConfigurationFontAwesomeStylesSet
  proIcons?: NuxtConfigurationFontAwesomeStylesSet
}

interface NuxtConfigurationFontAwesomeStylesSet {
  solid?: string[] | string
  regular?: string[] | string
  light?: string[] | string
  duotone?: string[] | string
  brands?: string[] | string
}

const fontawesome: NuxtConfigurationFontAwesome = {
  icons: {
    solid: ["faStar", "faCodeBranch", "faEnvelope"],
    brands: ["faTwitter", "faGithub", "faRedditAlien"],
  },
}

export default fontawesome
