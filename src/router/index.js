import PreviewFilmVue from '@/components/PreviewFilm.vue'
import DaftarSayaView from '@/views/DaftarSaya.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/Login.vue'
import SignInView from '@/views/SignIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/tvmaze',
            component: HomeView
        },
        {
            path: '/daftarsaya',
            component: DaftarSayaView
        },
        {
            path: '/register',
            component: SignInView
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/preview',
            component: PreviewFilmVue
        },
    ]
})

export default router