import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: async () => import('@/views/main.vue'),
        name: 'main',
    },
    {
        path: '/katalog/:category',
        component: async () => import('@/views/katalog.vue'),
        name: 'katalog',
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

declare var preloaderOpen: () => void;
declare var preloaderClose: () => void;


router.afterEach((to, from) => {
    window.scrollTo(0, 0)
    if (to.fullPath == from.fullPath) {
        return
    }
    preloaderOpen();
})

export default router