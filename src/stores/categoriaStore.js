import { defineStore } from 'pinia'
import { ref } from 'vue'

import categoriasData from '../data/categorias.json'

export const useCategoriasStore = defineStore('categorias', () => {
  const categorias = ref([])

  const cargaCategorias = async () => {
    try {
      categorias.value = categoriasData
      console.log(categorias.value);
      
    } catch (error) {
      console.error(error)
    }
  }

  return {
    cargaCategorias,
    categorias,
  }
})
