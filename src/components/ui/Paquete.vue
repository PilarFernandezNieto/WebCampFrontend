<script setup>

defineProps({
  paquete: {
    type: Object,
    required: true,
  },
}) 
</script>
<template>
  <div class="caja border border-blue-900 rounded-md p-12 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between gap-8" >
    <div>
      <h3 class="font-black text-4xl my-8 text-blue-800">{{ paquete.nombre }}</h3>
      <ul class="space-y-4">
        <li v-for="beneficio in paquete.beneficios" class="">{{ beneficio }}</li>
      </ul>
    </div>
    <p class="text-8xl mt-12 text-blue-800 text-center font-black">{{ paquete.precio }}€</p>

    
    

  </div>
</template>

<style scoped>

</style>
