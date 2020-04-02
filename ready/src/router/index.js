import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {path: 'css', name: 'css', component: () => import('../views/css-component')},
            {path: 'todo', name: 'todo', component: () => import('../views/todolist')}
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
