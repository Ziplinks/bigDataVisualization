import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false) 不在侧边栏显示
 * alwaysShow: true               if set true, will always show the root menu 一直显示根路由
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb 重定向地址，在面包屑中点击会重定向去的地址
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles) 你可以在根路由设置权限，这样它下面所有的子路由都继承了这个权限
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true) 如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set 当路由设置了该属性，则会高亮相对应的侧边栏。
    affix: true                  if set true, the tag will affix in the tags-view 如果设置为true，它则会固定在tags-view中(默认 false)
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements 
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/welcome/index'),//欢迎页面（首页）
    hidden: true
  }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export default router
