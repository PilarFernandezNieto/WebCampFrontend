<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  active: {
    type: Boolean,
  },
})

const classes = computed(() =>
  props.active
    ? 'block w-full text-center md:w-auto md:inline-flex items-center p-4 uppercase font-black leading-6 bg-blue-950 text-white focus:outline-none focus:border-blue-950 transition duration-150 ease-in-out'
    : 'block w-full text-center md:w-auto md:inline-flex items-center p-4 uppercase font-black leading-6 text-blue-950 hover:bg-blue-950 hover:text-white focus:outline-none focus:text-white focus:border-gray-300 transition duration-150 ease-in-out'
)
</script>

<template>
  <RouterLink :to="to" :class="classes">
    <slot />
  </RouterLink>
</template>
