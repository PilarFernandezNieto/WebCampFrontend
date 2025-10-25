<script setup>
import { onMounted, ref } from 'vue'
const efectos = [
  'fade-up',
  'fade-down',
  'fade-left',
  'fade-right',
  'flip-left',
  'flip-right',
  'zoom-in',
  'zoom-in-up',
  'zoom-in-down',
  'zoom-out',
]
// Creamos un array vacío para los efectos de cada caja
const efectoAleatorio = ref([])

onMounted(async() => {
  // Elegimos un efecto al azar
  efectoAleatorio.value = efectos[Math.floor(Math.random() * efectos.length)]
  
  await nextTick()
  
  if (window.AOS) window.AOS.refresh()
})


</script>
<template>
  <section class="resumen">
    <div class="overlay"></div>
    <div
      class="contenedor w-11/12 grid grid-cols-1 md:grid-cols-2 gap-20 py-10 justify-center items-center"
    >
      <div class="text-center" :data-aos="efectoAleatorio">
        <p class="numero">18</p>
        <p class="texto">Speakers</p>
      </div>

      <div class="text-center" :data-aos="efectoAleatorio">
        <p class="numero">16</p>
        <p class="texto">Conferencias</p>
      </div>

      <div class="text-center" :data-aos="efectoAleatorio">
        <p class="numero">16</p>
        <p class="texto">Workshops</p>
      </div>

      <div class="text-center" :data-aos="efectoAleatorio">
        <p class="numero">18</p>
        <p class="texto">Asistentes</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resumen {
  min-height: 40rem;
  background-image: url('/img/bg_numeros.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  position: relative;
  display: flex;
  align-items: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(22, 37, 86, 0.7);
}
.resumen .contenedor {
  position: relative;
  z-index: 1;
  color: white;
}
.resumen .numero {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
}
.resumen .texto {
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
}
</style>
