import request from '@/utils/request'
import service from '@/store/modules/service'

const baseURL = service.state.apiService

//请求示例
export function adsTrafficStatsByChannel(data) {
  return request({
    url: `/data/adsTrafficStatsByChannel?type=${data.type}&day=${data.day}`,
    method: 'get',
    baseURL: baseURL
  })
}

export function adsDownloadTop101d(type) {
  return request({
    url: `/data/adsDownloadTop101d?type=${type}`,
    method: 'get',
    baseURL: baseURL
  })
}

export function adsDownloadTop10Detail(data) {
  return request({
    url: `/data/adsDownloadTop10Detail?type=${data.type}&school=${data.school}`,
    method: 'get',
    baseURL: baseURL
  })
}

export function adsNewBuyerStats() {
  return request({
    url: `/data/adsNewBuyerStats`,
    method: 'get',
    baseURL: baseURL
  })
}

// export function scanCodeLogin(data) {
//   return request({
//     url: `/scanCodeLogin`,
//     method: 'post',
//     data: data,
//     baseURL: baseURL
//   })
// }