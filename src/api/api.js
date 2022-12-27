import request from '@/utils/request'
import service from '@/store/modules/service'

const baseURL = service.state.apiService

//请求示例
export function getAdsTrafficStatsByChannel(data) {
  return request({
    url: `/data/adsTrafficStatsByChannel?type=${data.type}&day=${data.day}`,
    method: 'get',
    baseURL: baseURL
  })
}

export function getAdsDownloadTop101d(type) {
  return request({
    url: `/data/adsDownloadTop101d?type=${type}`,
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