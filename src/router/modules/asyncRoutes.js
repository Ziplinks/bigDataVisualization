import Layout from '@/layout'

/* 
作用：根据用户角色动态加载的路由 roles: ['admin', 'teacher','student']
引用位置：src\store\modules\permission.js ---generateRoutes()
*/
export const asyncRoutes = [
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/', hidden: true }
    
]