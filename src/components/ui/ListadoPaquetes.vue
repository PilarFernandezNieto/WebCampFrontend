<script setup>
import { onMounted } from 'vue';
import Paquete from './Paquete.vue';
import Titulares from './Titulares.vue'

import { usePaquetesStore } from '@/stores/paquetesStore'

const paquetesStore = usePaquetesStore()

onMounted(async () => {
  await paquetesStore.cargaPaquetes()
})
</script>
<template>
  <section class="speakers">
    <Titulares>
      <template #titulo>Paquetes</template>
      <template #subtitulo>Compara los paquetes de DevWebCamp</template>
    </Titulares>
    
    <div
      class="contenedor w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 mt-8"
    >
      <Paquete v-for="paquete in paquetesStore.paquetes" :key="paquete.id" :paquete="paquete" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
