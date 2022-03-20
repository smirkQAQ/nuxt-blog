/*
 * @Author: LC
 * @Date: 2022-03-20
 * @Description: 
 */

export const state = () => ({
  meunIndex: ''
})

export const mutations = {
  SET_MENU_INDEX(state, index) {
    state.meunIndex = index
  }
}
