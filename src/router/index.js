import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../dashboard/DashboardComp.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;