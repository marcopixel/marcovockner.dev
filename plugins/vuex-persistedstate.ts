import { Plugin } from "@nuxt/types"
import createPersistedState from "vuex-persistedstate"

const vuexPersistedState: Plugin = ({ store }) => {
  createPersistedState({
    key: "githubAPIcache",
    paths: ["github"],
  })(store)
}

export default vuexPersistedState
