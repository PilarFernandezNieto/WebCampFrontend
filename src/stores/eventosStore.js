import { defineStore } from 'pinia'
import { ref } from 'vue'

import eventosData from '../data/eventos.json'

import { useRouter } from 'vue-router'

export const useEventosStore = defineStore('eventos', () => {
  const eventos = ref([])

  const cargaEventos = async () => {
    try {
      eventos.value = eventosData
      console.log(eventos.value);
      
    } catch (error) {
      console.error(error)
    }
  }

  return {
    cargaEventos,
    eventos,
  }
})
