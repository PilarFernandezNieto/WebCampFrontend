<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import Presentacion from '@/components/ui/Presentacion.vue'
import Resumen from '@/components/ui/Resumen.vue'
import ListadoSpeakers from '../components/ui/ListadoSpeakers.vue'
import ListadoTalleresConferencias from '../components/ui/ListadoEventos.vue'
</script>

<template>
  <MainLayout>
    <!-- PRESENTACIÓN -->
    <Presentacion />

    <!-- RESUMEN -->
    <Resumen />

    <!-- SPEAKERS -->
    <ListadoSpeakers />

    <!-- CONFERENCIAS Y WORKSHOPS -->
     <ListadoTalleresConferencias />
  </MainLayout>
</template>

<style scoped></style>
