/*
 * @Author: LC
 * @Date: 2022-03-20
 * @Description: 
 */

export const state = () => ({
  meunIndex: '',
  isHeaderHidden: false, // true or false
  scrollTop: 0,
  isToTop: false,
  oldScrollTop: 0,
})
export const mutations = {
  SET_MENU_INDEX(state, index) {
    state.meunIndex = index
  },
  
  SET_HEADER_STATUS(state, scrollTop) {
    // 存储滚动距离
    state.scrollTop = scrollTop
    
    let scrollStep = scrollTop - state.oldScrollTop;
    state.oldScrollTop = scrollTop;
    console.log(scrollStep);
    scrollStep > 0 ? state.isHeaderHidden = true : state.isHeaderHidden = false
    // backTop
    scrollTop > 200 ? state.isToTop = true : state.isToTop = false
  }
}
