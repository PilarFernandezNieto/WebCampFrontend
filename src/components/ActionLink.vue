<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },

})
 

</script>

<template>
  
  <RouterLink :to="to" class="inline-flex items-center px-4 py-2 mr-8 bg-blue-950 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-blue-900 focus:bg-blue-900 active:bg-blue-900 focus:outline-none transition ease-in-out duration-150">
    <slot />
  </RouterLink>
</template>