<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import NavLink from '../components/NavLink.vue'
import ImgHeader from '@/assets/img/header.jpg'
import PrimaryButton from './PrimaryButton.vue'
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

  <div class="imagen_header">
    <div class="overlay"></div>
    <h1 class="logo_devwebcamp">DEVWEBCAMP</h1>
    <p class="logo_texto">Formación</p>
    <PrimaryButton class="absolute top-[65%] md:top-[75%] left-[5%]">Comprar Pase Ya</PrimaryButton>
    

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
      <NavLink :to="{ name: 'paquetes' }" :active="route.name == 'paquetes'"> Paquetes </NavLink>
      <NavLink :to="{ name: 'conferencias' }" :active="route.name == 'conferencias'">
        Conferencias
      </NavLink>
      <NavLink :to="{ name: 'workshops' }" :active="route.name == 'workshops'"> Workshops </NavLink>
    </nav>
  </div>
</template>

<style scoped>
.imagen_header {
  min-height: 60rem;
  background-image: url('/img/header.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(22, 37, 86, 0.9), rgba(22, 37, 86, 0.4));
}
.logo_devwebcamp{
  font-family: 'CocoBiker', sans-serif;
  font-size: clamp(3rem, 6vw, 9rem);
  position: absolute;
  top: 50%;   
  left: 5%;
  color: white;
}
.logo_texto{
  font-size: clamp(2rem, 6vw, 3rem);
  position: absolute;
  top: 58%;   
  left: 5.5%;
  color: white;
} 
@media (min-width: 768px){
  .logo_texto {
    top: 66%;
  }
}
</style>
