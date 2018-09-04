import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
// import Layout from '@/views/layout'
// import Project from '@/views/backend/project'
// import Doc from '@/views/backend/doc'
// import Workbench from '@/views/backend/workbench'

/**
 * webpack 代码分割功能
 *      require.ensure代码分块
 *          require.ensure(依赖数组,回调函数,[chunk名字])
 *              chunk名相同的会打包到同一个js文件中
 *      import函数
 *              使用import是无法把两个文件打包到同一个js文件中
 */

let Layout = (resolve) => {
    return require.ensure([],() => {
        resolve(require('@/views/layout'))
    },'lay')
}

let Project = (resolve) => {
    return require.ensure([],() => {
        resolve(require('@/views/backend/project'))
    },'pro')
}

let Doc = (resolve) => {
    return require.ensure([], () => {
        resolve(require('@/views/backend/doc'))
    },'pro')
}

// let Workbench = (resolve) => {
//     return require.ensure([], () => {
//         resolve(require('@/views/backend/workbench'))
//     },'work')
// }
// 等同于
let Workbench = (resolve) => {
    return import('@/views/backend/workbench')
}

import Login from '@/components/login'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: Home,
            component: Home
        },
        {
            path: '/management',
            name: 'Management',
            component: Layout,
            children: [
                {
                    path: '/project',
                    name: 'Project',
                    component: Project,
                    meta: {
                        login: true
                    }
                },
                {
                    path: '/workbench',
                    name: 'Workbench',
                    component: Workbench,
                    meta: {
                        login: true
                    }
                },
                {
                    path: '/doc',
                    name: 'Doc',
                    component: Doc,
                    meta: {
                        login: false
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    // console.log(to)

    let bl = to.matched.some(function(item){
        return item.meta.login
    })

    if(to.matched.some(item => item.meta.login)){   // 等同于bl
        // this 的作用域就是当前箭头函数这个模块的作用域，不是vue根实例
        let info = router.app.$local.fetch("miaov") // router.app指的是vue根实例    
        if(info.login){
            next()
        }else{
            router.push({
                path: '/login',
                query: {
                    redirect: to.path.slice(1)
                }
            })
        }
    }else{
        next()
    }
})

export default router
