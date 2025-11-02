<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import NavLink from '@/components/NavLink.vue'
import ImgHeader from '@/assets/img/header.jpg'
import MyButton from '@/components/MyButton.vue'
import Dropdown from '../Dropdown.vue'
import DropdownLink from '../DropdownLink.vue'
import DropdownButton from '../DropdownButton.vue'
import { version, ref } from 'vue'

import { useAuthStore } from '../../stores/auth'
import axios from '../../utils/axios'

const { user, logout, isLoggedIn, isAdmin } = useAuthStore()

console.log(isAdmin);


// const { data } = await axios.get('/')

// const laravelVersion = data?.Laravel ?? ''

const route = useRoute()
const menuAbierto = ref(false)
const abreMenu = () => {
  menuAbierto.value = !menuAbierto.value
}
</script>
<template>
  <div class="absolute top-0 right-0 p-8 text-right z-10">
    <template v-if="!isLoggedIn">
      <RouterLink
        :to="{ name: 'login' }"
        class="font-semibold uppercase text-sm text-white hover:text-blue-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-400 p-4"
        >Inicia Sesión</RouterLink
      >

      <RouterLink
        :to="{ name: 'register' }"
        class="font-semibold uppercase text-sm text-white hover:text-blue-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-400 p-4"
        >Registro</RouterLink
      >
    </template>
    <div class="z-50">
      <!-- Settings Dropdown User-->
      <div v-if="isLoggedIn" class="ml-3 relative">
        <Dropdown align="right">
          <template #trigger>
            <span class="inline-flex rounded-md">
              <button
                type="button"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
              >
                {{ user?.name }}

                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </template>
          <template #content>
            <div v-if="isAdmin">
              <DropdownLink :to="{ name: 'dashboard' }">Administrador</DropdownLink>
            </div>

            <DropdownButton @click="logout()" class="text-left text-sm">Cierra sesión</DropdownButton>
          </template>
        </Dropdown>
      </div>
    </div>
  </div>

  <div class="imagen_header min-h-[30rem] lg:min-h-[50rem]">
    <div class="overlay"></div>
    <div class="w-90%] z-50 flex flex-col justify-center">
      <h1 class="logo_devwebcamp">DEVWEBCAMP</h1>
      <p class="logo_texto">Formación</p>
      <MyButton class="absolute top-[73%] sm:top-[76%] left-[5%]">Comprar Pase Ya</MyButton>
    </div>
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
      <NavLink
        :to="{ name: 'conferencias-talleres' }"
        :active="route.name == 'conferencias-talleres'"
      >
        Conferencias & Talleres
      </NavLink>
    </nav>
  </div>
</template>

<style scoped>
.imagen_header {
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
</style>
