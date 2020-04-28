export const state = () => ({
    activeIndex: 0
})
export const mutations = {
    changeActive(state,index) {
        state.activeIndex=index
    }
  }