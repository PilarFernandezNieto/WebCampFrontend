import { defineStore } from 'pinia'
import { ref } from 'vue'

import horasData from '../data/horas.json'

export const useHorasStore = defineStore('horas', () => {
  const horas = ref([])

  const cargaHoras = async () => {
    try {
      horas.value = horasData
      console.log(horas.value);
      
    } catch (error) {
      console.error(error)
    }
  }

  return {
    cargaHoras,
    horas,
  }
})
