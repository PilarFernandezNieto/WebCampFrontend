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
    ? 'flex flex-col gap-2 items-center px-4 py-2 text-md font-medium leading-5 text-orange-500 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
    : 'flex flex-col gap-2 items-center px-4 py-2 text-md font-medium leading-5 text-white hover:text-orange-500 focus:outline-none focus:text-orange-400 focus:border-orange-300 transition duration-150 ease-in-out',
)
</script>

<template>
  
  <RouterLink :to="to" :class="classes">
    <slot />
  </RouterLink>
</template>
