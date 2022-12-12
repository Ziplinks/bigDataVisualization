import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import NProgress from "nprogress";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  withCredentials: true,
  transformRequest: [(data) => JSON.stringify(data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;application/octet-stream;',
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // console.log(store.getters.token);
    // console.log(getToken());
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = store.getters.token
      // config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response
    // if the custom code is not 20000, it is judged as an error.
    // res.data.status === 1 upms返回结果  扫码登录使用
    if (res.data.code === 200 || res.data.code === 601 || res.data.status === 1) {
      return res
    } else {
      let responseType = res.request.responseType
      if (responseType !== "arraybuffer") { //导出文件流不提示错误
        Message({
          message: res.data.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return res
    }
  },
  error => {
    if (error && error.response && error.response.status) {
      if (error.response.status === 401) {//token失效
        if (document.getElementsByClassName('el-message').length === 0) {
          let msg = '登录信息已失效！';
          if (error.response.data.code === 602 && error.response.data.message != undefined) {
            msg = error.response.data.message;
          }
          Message.error({
            message: msg, duration: 2000,
            onClose: () => {
              // window.location.href = "/cps-home/"; //token失效退出到首页
            },
          });
          NProgress.done()
        }
      } else if (error.response.status === 403) {
        if (document.getElementsByClassName('el-message').length === 0) {
          Message.error('对不起，你没有该访问权限，请联系管理员！');
          setTimeout(()=>{
            localStorage.removeItem("token");
            if (
              navigator.userAgent.indexOf("Firefox") != -1 ||
              navigator.userAgent.indexOf("Chrome") != -1
            ) {
              window.location.href = "about:blank";
              window.close();
            } else {
              window.opener = null;
              window.open("", "_self");
              window.close();
            }
          },2000)
        }
      } else if (error.response.data.message != undefined) {
        if (document.getElementsByClassName('el-message').length === 0) {
          Message.error(error.response.data.message);
        }
      } else {
        if (document.getElementsByClassName('el-message').length === 0) {
          Message.error('服务器无响应');
        }
      }
    }
    return Promise.reject(error || '请求无响应')
  }
)

export default service
