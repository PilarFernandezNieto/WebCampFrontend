<script setup>
import Header from '@/components/ui/Header.vue'
import Footer from '@/components/ui/Footer.vue'
</script>

<template>
  <div class="flex justify-center flex-col bg-gray-50 dark:bg-gray-900 selection:bg-blue-500 selection:text-white">
    <Header />

    <slot />
    
    <Footer />
  </div>
</template>
