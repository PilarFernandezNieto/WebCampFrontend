<script setup>
import { computed } from 'vue'

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
    ? 'flex items-center gap-4  px-4 py-2 text-left text-base font-medium text-white bg-blue-950/50 focus:outline-none focus:text-blue-950 focus:bg-blue-100 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out'
    : 'flex items-center gap-4  px-4 py-2 text-left text-base font-medium text-white bg-blue-950/50 focus:outline-none focus:text-blue-950 focus:bg-blue-100 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out',
)
</script>

<template>
  <RouterLink :to="to" :class="classes">
    <slot />
  </RouterLink>
</template>
