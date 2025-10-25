<script setup>
import Speaker from './Speaker.vue'
import Titulares from './Titulares.vue'
</script>
<template>
  <section class="speakers">
    <Titulares>
      <template #titulo>Speakers</template>
      <template #subtitulo>Conoce a nuestros expertos</template>
    </Titulares>
    
    <div
      class="contenedor w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 justify-center items-center mt-8"
    >
      <Speaker v-for="n in 6" :key="n" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
