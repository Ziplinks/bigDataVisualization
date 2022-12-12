let  state = {
    service: '/',
    yyyfService: '/app'
}
let devService= {
    service: '/backstage-api',
    apiService: '/api',
    yyyfService: '/app'
}
let stagingService= {
    service: '/backstage-api',
    apiService: '/api',
    yyyfService: '/app'
}
let prodService= {
   service: '/backstage-api',
   apiService: '/api',
   yyyfService: '/app'
}
// 开发
if(process.env.NODE_ENV === 'development'){
    state = Object.assign(state,devService)
}
// 测试
if(process.env.NODE_ENV === 'staging'){
    state = Object.assign(state,stagingService)
}
// 生产
if(process.env.NODE_ENV === 'production'){
    state = Object.assign(state,prodService)
}
export default {
    namespaced: true,
    state,
}
