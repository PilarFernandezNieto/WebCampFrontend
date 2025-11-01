<script setup>
import ApplicationLogo from '../components/ApplicationLogo.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
  >
    <div>
      <router-link to="/">
        <ApplicationLogo class="text-4xl"  />
      </router-link>
    </div>

    <div
      class="contenedor-sm w-11/12 md:w-4/12 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg"
    >
    
      <slot />
    </div>
  </div>
</template>
