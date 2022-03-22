/*
 * @Author: LC
 * @Date: 2022-03-20
 * @Description: 
 */

export const state = () => ({
  meunIndex: '',
  headerStatus: false, // true or false
  scrollTop: 0,
  isToTop: false,
  oldScrollTop: 0,
})
export const mutations = {
  SET_MENU_INDEX(state, index) {
    state.meunIndex = index
  },
  
  SET_HEADER_STATUS(state, scrollTop) {
    state.scrollTop = scrollTop
    let scrollStep = scrollTop - state.oldScrollTop;
    state.oldScrollTop = scrollTop;
    scrollStep > 0 ? state.headerStatus = true : state.headerStatus = false
    scrollTop > 200 ? state.isToTop = true : state.isToTop = false
  }
}
