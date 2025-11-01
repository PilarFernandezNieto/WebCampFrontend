<script setup>
defineProps({
  evento: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="evento">
    <p class="hora font-bold my-4">{{ evento.hora }}</p>
    <div
      class="informacion p-6 rounded-2xl text-white transition-all duration-300 ease-in"
      :class="{
        'bg-blue-950 hover:bg-blue-900': evento.tipo === 'conferencia',
        'bg-orange-700 hover:bg-orange-800': evento.tipo === 'taller',
      }"
    >
      <h4 class="min-h-[5rem] font-bold text-xl">{{ evento.nombre }}</h4>
      <div class="introduccion min-h-[6rem] text-lg overflow-hidden">{{ evento.descripcion }}</div>
      <div class="autor-info flex justify-between items-center mt-6">
        <img
          class="w-14 rounded-full bg-slate-100"
          :src="evento.imagen"
          alt="Imagen {{ evento.ponente }}"
        />
        <p class="autor font-bold">{{ evento.ponente }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
