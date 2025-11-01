<script setup>
import { computed } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
  },
})

const classes = computed(() =>
  props.active
    ? 'block w-full pl-3 pr-4 py-2 text-left text-base font-medium text-white focus:outline-none focus:text-white focus:bg-blue-980 focus:border-blue-950 transition duration-150 ease-in-out'
    : 'block w-full pl-3 pr-4 py-2 text-left text-base font-medium text-white hover:text-blue-950 hover:bg-white hover:border-blue-950focus:outline-none focus:text-blue-950 focus:bg-white focus:border-blue-950 transition duration-150 ease-in-out',
)
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
