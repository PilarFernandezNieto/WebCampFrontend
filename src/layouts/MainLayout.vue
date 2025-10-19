<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex justify-center flex-col bg-gray-50 dark:bg-gray-900 selection:bg-blue-500 selection:text-white">
    <Header />

    <slot />
    
    <Footer />
  </div>
</template>
