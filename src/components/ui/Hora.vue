<script setup>
defineProps({
  hora: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <li class="text-center font-medium p-1 rounded-md text-blue-950 border border-blue-950 hover:text-white hover:bg-blue-950 cursor-pointer transition-colors duration-300 ease-in">
    {{ hora.hora }}
  </li>
</template>

<style lang="scss" scoped></style>
