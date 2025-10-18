<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import NavLink from '../components/NavLink.vue'
import { version, ref } from 'vue'


import { useAuthStore } from '../stores/auth'
import axios from '../utils/axios'




const { isLoggedIn } = useAuthStore()

const { data } = await axios.get('/')

const laravelVersion = data?.Laravel ?? ''

const route = useRoute()
const menuAbierto = ref(false)
const abreMenu = () => {
  menuAbierto.value = !menuAbierto.value
}
</script>
<template>
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
    <!-- <div
      class="bg-imagen-hero bg-cover bg-[position:center_left] bg-no-repeat h-64 sm:h-96 md:h-[280px] lg:h-[512px]"
    ></div> -->

    <img src="/public/img/ImagenHero.jpg" alt="Imagen central" class="w-full h-full object-cover">
  </div>
  <div class="border-b border-blue-950">
    <p class="icono-menu flex justify-center md:hidden p-4" @click="abreMenu">
      <i class="fa-solid fa-bars"></i>
    </p>
    <nav
      class="w-full lg:w-11/12 contenedor menu-navegacion flex flex-col items-center transition-all duration-300 ease-in-out md:flex md:flex-row md:justify-center"
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

<style scoped></style>
