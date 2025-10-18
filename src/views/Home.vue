<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <div
    class="flex justify-center flex-col bg-gray-50 dark:bg-gray-900 selection:bg-blue-500 selection:text-white"
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
    <Header />
  </div>
</template>

<style scoped></style>
