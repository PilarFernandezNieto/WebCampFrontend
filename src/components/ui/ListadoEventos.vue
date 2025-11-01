<script setup>
import { ref, onMounted, computed } from 'vue'
import Titulares from './Titulares.vue'
import Evento from './Evento.vue'
import { useEventosStore } from '@/stores/eventosStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const eventosStore = useEventosStore()

onMounted(async () => {
  await eventosStore.cargaEventos()
})

const conferencias = computed(() =>
  eventosStore.eventos.filter((evento) => evento.tipo === 'conferencia'),
)
const talleres = computed(() => eventosStore.eventos.filter((evento) => evento.tipo === 'taller'))
</script>
<template>
  <Titulares>
    <template #titulo>Talleres y Conferencias</template>
    <template #subtitulo>Aprende de los mejores en DevWebCamp</template>
  </Titulares>
  <div class="contenedor w-11/12">
    <h3 class="mt-12 text-5xl font-bold text-blue-950">Conferencias</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 justify-center items-center">
      <Evento v-for="evento in conferencias" :key="evento.id" :evento="evento" />
    </div>
    <h3 class="mt-12 text-5xl">Talleres</h3>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 justify-center items-center"
    >
      <Evento v-for="evento in talleres" :key="evento.id" :evento="evento" />
    </div>
  </div>
</template>

<style scoped></style>
