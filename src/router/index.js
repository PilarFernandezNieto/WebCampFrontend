import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Inicio', middleware: [] },
      component: Home,
    },
    {
      path: '/paquetes',
      name: 'paquetes',
      meta: { title: 'Paquetes', middleware: [] },
      component: () => import('../views/paginas/PaquetesView.vue'),
    },

    {
      path: '/conferencias-talleres',
      name: 'conferencias-talleres',
      meta: { title: 'Conferencias & Talleres', middleware: [] },
      component: () => import('../views/paginas/ConferenciasTalleresView.vue'),
    },

    {
      path: '/admin',
      name: 'admin',
      meta: { title: 'Admin', middleware: ['auth'] },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          meta: { title: 'Dashboard', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/Dashboard.vue'),
        },
        {
          path: 'ponentes',
          name: 'ponentes',
          meta: { title: 'Ponentes', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/ponentes/PonentesView.vue'),
        },
        {
          path: 'nuevo-ponente',
          name: 'nuevo-ponente',
          meta: { title: 'Nuevo Ponente', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/ponentes/NuevoPonenteView.vue'),
        },

        {
          path: 'eventos',
          name: 'eventos',
          meta: { title: 'Eventos', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/eventos/EventosView.vue'),
        },
        {
          path: 'nuevo-evento',
          name: 'nuevo-evento',
          meta: { title: 'Nuevo Evento', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/eventos/NuevoEventoView.vue'),
        },
        {
          path: 'categorias',
          name: 'categorias',
          meta: { title: 'Categorías', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/categorias/CategoriasView.vue'),
        },
        {
          path: 'nueva-categoria',
          name: 'nueva-categoria',
          meta: { title: 'Nueva Categoría', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/categorias/NuevaCategoriaView.vue'),
        },
        {
          path: 'listado-paquetes',
          name: 'listado-paquetes',
          meta: { title: 'Paquetes', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/paquetes/PaquetesView.vue'),
        },
        {
          path: 'nuevo-paquete',
          name: 'nuevo-paquete',
          meta: { title: 'Nuevo Paquete', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/paquetes/NuevoPaqueteView.vue'),
        },
        {
          path: 'regalos',
          name: 'regalos',
          meta: { title: 'Regalos', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/regalos/RegalosView.vue'),
        },
        {
          path: 'nuevo-regalo',
          name: 'nuevo-regalo',
          meta: { title: 'Nuevo Regalo', middleware: ['auth', 'verified'] },
          component: () => import('../views/admin/regalos/NuevoRegaloView.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      meta: { title: 'Auth', middleware: ['guest'] },
      children: [
        {
          path: 'login',
          alias: '/intranet',
          name: 'login',
          meta: { title: 'Inicia sesión', middleware: ['guest'] },
          component: () => import('../views/auth/Login.vue'),
        },
        {
          path: 'register',
          name: 'register',
          meta: { title: 'Registro', middleware: ['guest'] },
          component: () => import('../views/auth/Register.vue'),
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          meta: { title: 'Recupera contraseña', middleware: ['guest'] },
          component: () => import('../views/auth/ForgotPassword.vue'),
        },
        {
          path: 'password-reset/:token',
          name: 'password-reset',
          meta: { title: 'Contraseña nueva', middleware: ['guest'] },
          component: () => import('../views/auth/PasswordReset.vue'),
        },
        {
          path: 'verify-email',
          name: 'verify-email',
          meta: { title: 'Verifica email', middleware: ['auth'] },
          component: () => import('../views/auth/VerifyEmail.vue'),
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  document.title = import.meta.env.VITE_APP_NAME + ' | ' + to.meta.title

  const auth = useAuthStore()

  if (!auth.isLoggedIn) {
    await auth.fetchUser()
  }

  if (to.meta.middleware.includes('guest') && auth.isLoggedIn) next({ name: 'dashboard' })
  else if (
    to.meta.middleware.includes('verified') &&
    auth.isLoggedIn &&
    !auth.user.email_verified_at
  )
    next({ name: 'verify-email' })
  else if (to.meta.middleware.includes('auth') && !auth.isLoggedIn) next({ name: 'login' })
  else if (to.meta.middleware.includes('is_admin') && !auth.isAdmin) next({ name: 'home' })
  else next()
})

export default router
