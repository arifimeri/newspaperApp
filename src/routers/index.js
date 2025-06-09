// router/index.js (ose ku po e konfiguron router-in)

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/auth.js'
import AboutView from "@/views/AboutView.vue";
import SinglePostView from "@/views/SinglePostView.vue";
import ContactView from "@/views/ContactView.vue";
import AdminView from "@/views/AdminView.vue";

const routes = [
    {
        path: '/admin',
        name: 'Admin',
        component: AdminView,
        meta: { requiresAuth: true }
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: false },
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: { requiresAuth: false },
    },
    {
        path: '/about-us',
        name: 'about',
        component: AboutView,
        meta: {requiresAuth: true,}
    },
    {
        path: '/single-post',
        name: 'single-post',
        component: SinglePostView,
        meta: { requiresAuth: false },
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: { requiresAuth: false },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
        next({ name: 'login', query: { redirect: to.fullPath } })
    } else if (to.name === 'login' && authStore.isLoggedIn) {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router
