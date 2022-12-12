import request from '@/utils/request'
import service from '@/store/modules/service'

const baseURL = service.state.apiService

//请求示例
export function getArrangementInfo(id) {
  return request({
    url: `/getArrangementInfo/${id}`,
    method: 'get',
    baseURL: baseURL
  })
}


export function scanCodeLogin(data) {
  return request({
    url: `/scanCodeLogin`,
    method: 'post',
    data: data,
    baseURL: baseURL
  })
}