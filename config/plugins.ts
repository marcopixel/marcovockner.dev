import { NuxtConfigurationPlugin } from "@nuxt/types/config/plugin"

const plugins: NuxtConfigurationPlugin[] = [
  {
    src: "@/plugins/vuex-persistedstate",
    ssr: false,
  },
]

export default plugins
