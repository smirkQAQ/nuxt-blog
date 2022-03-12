/*
 * @Author: LC
 * @Date: 2022-03-08
 * @Description: 
 */
export default ({ $axios, redirect, route, store }) => {
  // 基本配置
  $axios.defaults.timeout = 10000;
  // 请求拦截
  $axios.onRequest(config => {
    // config.headers.token = 'token'
    return config
  })
  // 相应拦截
  $axios.onResponse(res => {
    return {
      code: res?.status,
      data: res?.data
    }
  })

  // 错误处理
  $axios.onError(error => {
    return error
  })
}
