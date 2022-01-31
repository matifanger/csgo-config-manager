export const state = () => ({
    config_generated: null,
  })
  
  export const mutations = {
    config_generated_mutate(state, payload) {
      state.config_generated = payload
    }
  }