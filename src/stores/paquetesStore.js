import { defineStore } from 'pinia'
import { ref } from 'vue'

import paquetesData from '../data/paquetes.json'

export const usePaquetesStore = defineStore('paquetes', () => {
  const paquetes = ref([])

  const cargaPaquetes = async () => {
    try {
      paquetes.value = paquetesData
      console.log(paquetes.value);
      
    } catch (error) {
      console.error(error)
    }
  }

  return {
    cargaPaquetes,
    paquetes,
  }
})
