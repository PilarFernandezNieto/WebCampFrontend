import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '../utils/axios'
import { useToastStore } from './toastStore'
import { useRouter } from 'vue-router'

export const usePonenteStore = defineStore('ponentes', () => {
  const ponentes = ref([])
  const loading = ref(true);
  const toastStore = useToastStore()
  const router = useRouter();


  const csrf = () => axios.get('/sanctum/csrf-cookie')
  
  const getPonentes = async () => {
    try {
      await csrf();
      loading.value = true;
      const {data} = await axios.get('/api/admin/ponentes');
      ponentes.value = data.data;
    } catch (error) {
      console.error(error)
    }
  }
    const nuevoPonente = async (processing, errors, formData) => {
    processing.value = true
    errors.value = {}

    try {
      await csrf()
      const { data } = await axios.post('/api/admin/ponentes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(data.type);
      
      if (data.type === 'success') {
        toastStore.mostrarExito(data.message)
        router.push({ name: 'ponentes' })
      }
    } catch (error) {
      if (error?.response?.status === 422) {
        errors.value = error.response.data.errors
      }
    } finally {
      processing.value = false
    }
  }

  

  return {
    getPonentes,
    ponentes,
    nuevoPonente
  }
})
