<script setup>
import CajaSpeaker from '../components/CajaSpeaker.vue'
</script>
<template>
  <section class="speakers">
    <h2 class="font-black text-center mt-12">Speakers</h2>
    <p class="text-center text-3xl mt-4">Conoce a nuestros expertos</p>
    <div
      class="contenedor w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 justify-center items-center mt-8"
    >
      <CajaSpeaker v-for="n in 6" :key="n" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
