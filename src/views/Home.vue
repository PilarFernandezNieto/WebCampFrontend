<script setup>
import { version, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import NavLink from '../components/NavLink.vue'
import { useAuthStore } from '../stores/auth'
import axios from '../utils/axios'

const menuAbierto = ref(false)
const route = useRoute()

const { isLoggedIn } = useAuthStore()

const { data } = await axios.get('/')

const laravelVersion = data?.Laravel ?? ''

const abreMenu = () => {
  menuAbierto.value = !menuAbierto.value
}
</script>

<template>
  <div
    class="sm:flex sm:justify-center sm:items-center bg-gray-50 dark:bg-gray-900 selection:bg-red-500 selection:text-white"
  >
    <!-- <div class="sm:absolute sm:top-0 sm:left-0 p-6 text-right">
      <div
        class="font-semibold text-gray-600 dark:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 flex items-center gap-1"
      >
        <span>Backend Status :</span>
        <div v-if="laravelVersion" class="text-green-500">Connected</div>
        <div v-else class="text-red-500">Disconnected</div>
      </div>
    </div> -->

    <div class="absolute top-0 right-0 p-8 text-right z-10">
      <RouterLink
        v-if="isLoggedIn"
        to="/dashboard"
        class="font-semibold text-white hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-950"
        >Dashboard</RouterLink
      >

      <template v-else>
        <RouterLink
          to="/login"
          class="font-semibold uppercase text-lg text-white hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-950"
          >Inicia Sesión</RouterLink
        >

        <RouterLink
          to="/register"
          class="ml-4 font-semibold uppercase text-lg text-white hover:text-gray-900 d focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-950"
          >Registro</RouterLink
        >
      </template>
    </div>

    <div class="w-full">
      <div class="bg-imagen-hero bg-cover bg-top bg-no-repeat h-[145px] md:h-[512px]"></div>
    </div>
  </div>
  <div class="border-b border-blue-950">
    <p class="icono-menu flex justify-center md:hidden p-4" @click="abreMenu">
      <i class="fa-solid fa-bars"></i>
    </p>
    <nav
      class="contenedor menu-navegacion flex flex-col items-center transition-all duration-300 ease-in-out md:flex md:flex-row md:justify-center"
      :class="{ block: menuAbierto, hidden: !menuAbierto }"
    >
      <NavLink :to="{ name: 'home' }" :active="route.name == 'home'"> Inicio </NavLink>
      <NavLink :to="{ name: 'eventos' }" :active="route.name == 'eventos'"> Eventos </NavLink>
      <NavLink :to="{ name: 'paquetes' }" :active="route.name == 'paquetes'"> Paquetes </NavLink>
      <NavLink
        :to="{ name: 'workshops-conferencias' }"
        :active="route.name == 'workshops-conferencias'"
      >
        Workshops & Conferencias
      </NavLink>
    </nav>
  </div>
</template>

<style scoped>

</style>
