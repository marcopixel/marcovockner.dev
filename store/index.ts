import { ActionTree, MutationTree } from "vuex"
import { ProjectEntry } from "@/types/data"

// state
export const state = () => ({
  github: [],
})
export type RootState = ReturnType<typeof state>

// actions
export const actions: ActionTree<RootState, RootState> = {
  async fetchGithubStats({ commit }, obj: ProjectEntry) {
    if (obj.github) {
      // fetch repo stats
      const request = await this.$axios.$get(
        `https://api.github.com/repos/${obj.github.owner}/${obj.github.repo}`
      )
      // set to new object
      const output = {
        key: obj.key,
        createdAt: this.$moment(),
        expiresAt: this.$moment().add(30, "minutes"),
        response: request,
      }
      // commit to state
      commit("SET_REPO_STATS", output)
    }
  },
}

// mutations
export const mutations: MutationTree<RootState> = {
  SET_REPO_STATS(state, project) {
    // check if item exists in array
    if (state.github.find((i) => i.key === project.key)) {
      const index = state.github.findIndex((i) => i.key === project.key)
      state.github[index] = project
    } else {
      state.github.push(project)
    }
  },
}
