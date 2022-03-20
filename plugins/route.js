/*
 * @Author: LC
 * @Date: 2022-03-20
 * @Description: 
 */

export default ({ app, store }) => {
  app.router.afterEach((to, from) => {
    // 用于设置菜单导航状态
    store.commit('SET_MENU_INDEX', to.path)
  })
}
