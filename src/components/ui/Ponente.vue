<script setup>
import ActionLink from '@/components/ActionLink.vue'


const apiUrl = import.meta.env.VITE_APP_BACKEND_URL
defineProps({
  ponente: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <tr
    class="hover:bg-gray-50 transition"
  >
    <td class="px-2 py-2 border text-center">{{ ponente.id }}</td>
    <td class="px-2 py-2 border text-center">
      <img :src="`${apiUrl}${ponente.imagen}`" :alt="`imagen_${ponente.nombre}`" class="w-24" />
    </td>
    <td class="px-2 py-2 border">{{ ponente.nombre }} {{ ponente.apellido }}</td>
    <td class="px-2 py-2 border">{{ ponente.ciudad }} ({{ ponente.pais }})</td>
    <td class="px-2 py-2 border text-center">
      <ActionLink :to="{ name: 'editar-ponente', params: { id: ponente.id } }" class="bg-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="w-6 h-6 stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </ActionLink>
      <!-- <button class="text-blue-600 hover:text-blue-800 font-medium">Editar</button> -->
    </td>
  </tr>
</template>

<style lang="scss" scoped></style>
