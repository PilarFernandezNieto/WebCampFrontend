<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ApplicationLogo from '../components/ApplicationLogo.vue'
import Dropdown from '../components/Dropdown.vue'
import DropdownButton from '../components/DropdownButton.vue'
import NavLinkAuthLayout from '../components/NavLinkAuthLayout.vue'
import ResponsiveNavLinkAuthLayout from '../components/ResponsiveNavLinkAuthLayout.vue'
import ResponsiveNavButtonAuthLayout from '../components/ResponsiveNavButtonAuthLayout.vue'
import { useAuthStore } from '../stores/auth'

const route = useRoute()

const { user, logout } = useAuthStore()

const showingNavigationDropdown = ref(false)
</script>

<template>
  <div>
    <div class="min-h-screen bg-gray-100 flex flex-col">
      <!-- Page Heading -->
      <header class="bg-blue-950 text-white shadow flex justify-between" v-if="$slots.header">
        <div class="py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
        <!-- DROPDOWN DE PERFIL USUARIO -->
        <div class="hidden sm:flex sm:items-center mr-8">
          <!-- Settings Dropdown -->
          <div class="ml-3 relative">
            <Dropdown align="right" width="48">
              <template #trigger>
                <span class="inline-flex rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-3 py-2 border border-transparent text-base leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
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
                <DropdownButton @click="logout()"> Cierra sesión </DropdownButton>
              </template>
            </Dropdown>
          </div>
        </div>
      </header>

      <!-- GRID DE 2 COLUMNAS VISTA DESKTOP-->
      <div class="hidden md:grid md:grid-cols-12 h-screen">
        <!-- MENÚ NAVEGACIÓN PRINCIPAL -->
        <div class="md:flex md:flex-col bg-blue-950 text-white col-span-1">
          <div class="md:h-[80%] md:flex md:flex-col justify-between py-8">
            <div class="flex flex-col gap-2">
              <!-- Navigation Links -->

              <NavLinkAuthLayout :to="{ name: 'home' }" :active="route.name == 'home'">
                <i class="fa-solid fa-house"></i>
                Inicio
              </NavLinkAuthLayout>

              <NavLinkAuthLayout :to="{ name: 'ponentes' }" :active="route.name == 'ponentes'">
                <i class="fa-solid fa-microphone"></i>
                Ponentes
              </NavLinkAuthLayout>

              <NavLinkAuthLayout :to="{ name: 'eventos' }" :active="route.name == 'eventos'">
                <i class="fa-solid fa-calendar"></i>
                Eventos
              </NavLinkAuthLayout>

              <NavLinkAuthLayout :to="{ name: 'categorias' }" :active="route.name == 'categorias'">
                <i class="fa-solid fa-tags"></i>
                Categorías
              </NavLinkAuthLayout>

              <NavLinkAuthLayout :to="{ name: 'paquetes' }" :active="route.name == 'paquetes'">
                <i class="fa-solid fa-box-open"></i>
                Paquetes
              </NavLinkAuthLayout>

              <NavLinkAuthLayout :to="{ name: 'regalos' }" :active="route.name == 'regalos'">
                <i class="fa-solid fa-gift"></i>
                Regalos
              </NavLinkAuthLayout>
            </div>
          </div>
        </div>
        <!-- Page Content -->
        <main class="hidden md:flex md:flex-col col-span-11">
          <slot />
        </main>
      </div>

      <!-- VISTA ADAPATATIVA -->
      <nav class="md:hidden bg-blue-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col justify-between py-4">
            <!-- Hamburger -->
            <div class="-mr-2 flex items-center justify-center sm:hidden">
              <button
                @click="showingNavigationDropdown = !showingNavigationDropdown"
                class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    :class="{
                      hidden: showingNavigationDropdown,
                      'inline-flex': !showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="{
                      hidden: !showingNavigationDropdown,
                      'inline-flex': showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div
          :class="{
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          }"
          class="sm:hidden"
        >
          <div class="pt-2 pb-3 space-y-1 nav-responsive">
            <ResponsiveNavLinkAuthLayout :to="{ name: 'home' }" :active="route.name == 'home'">
              <i class="fa-solid fa-house w-5 text-center"></i>
              Inicio
            </ResponsiveNavLinkAuthLayout>
            <ResponsiveNavLinkAuthLayout
              :to="{ name: 'ponentes' }"
              :active="route.name == 'ponentes'"
            >
              <i class="fa-solid fa-microphone w-5 text-center"></i>
              Ponentes
            </ResponsiveNavLinkAuthLayout>
            <ResponsiveNavLinkAuthLayout
              :to="{ name: 'eventos' }"
              :active="route.name == 'eventos'"
            >
              <i class="fa-solid fa-calendar w-5 text-center"></i>
              Eventos
            </ResponsiveNavLinkAuthLayout>
            <ResponsiveNavLinkAuthLayout
              :to="{ name: 'categorias' }"
              :active="route.name == 'categorias'"
            >
              <i class="fa-solid fa-tags w-5 text-center"></i>
              Categorías
            </ResponsiveNavLinkAuthLayout>
            <ResponsiveNavLinkAuthLayout
              :to="{ name: 'paquetes' }"
              :active="route.name == 'paquetes'"
            >
              <i class="fa-solid fa-box-open w-5 text-center"></i>
              Paquetes
            </ResponsiveNavLinkAuthLayout>
            <ResponsiveNavLinkAuthLayout
              :to="{ name: 'regalos' }"
              :active="route.name == 'regalos'"
            >
              <i class="fa-solid fa-gift w-5 text-center"></i>
              Regalos
            </ResponsiveNavLinkAuthLayout>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pt-4">
            <div class="px-4">
              <div class="font-medium text-base text-white">
                {{ user?.name }}
              </div>
              <div class="font-medium text-sm text-white">
                {{ user?.email }}
              </div>
            </div>

            <div class="mt-3 space-y-1">
              <ResponsiveNavButtonAuthLayout @click="logout()">
                Cerrar sesión
              </ResponsiveNavButtonAuthLayout>
            </div>
          </div>
        </div>
      </nav>
      <!-- Page Content -->
      <main class="sm:flex sm:flex-col md:hidden">
        <slot />
      </main>
    </div>
  </div>
</template>
