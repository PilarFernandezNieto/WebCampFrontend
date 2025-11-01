<script setup></script>
<template>
  <h2 class="font-black text-center mt-6">
    <slot name="titulo"></slot>
  </h2>
  <p class="text-center subtitulo">
    <slot name="subtitulo"></slot>
  </p>
</template>

<style scoped>
.subtitulo {
    font-size: clamp(1rem, 5vw, 1.5rem);
}
</style>
