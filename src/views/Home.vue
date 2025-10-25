<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import Presentacion from '../components/Presentacion.vue'
import Resumen from '../components/Resumen.vue'
import Speakers from '../components/Speakers.vue'
</script>

<template>
  <MainLayout>
    <!-- PRESENTACIÓN -->
    <Presentacion />

    <!-- RESUMEN -->
    <Resumen />

    <!-- SPEAKERS -->
    <Speakers />

    <!-- CONFERENCIAS Y WORKSHOPS -->
  </MainLayout>
</template>

<style scoped></style>
