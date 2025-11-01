<script setup>
import { onMounted, ref, nextTick  } from 'vue'

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

// Cada tarjeta tendrá su propio efecto aleatorio
const efectoAleatorio = ref('')

onMounted(async() => {
  // Elegimos un efecto al azar
  efectoAleatorio.value = efectos[Math.floor(Math.random() * efectos.length)]
  
  await nextTick()
  
  if (window.AOS) window.AOS.refresh()
})
</script>
<template>
  <div
    class="caja border border-blue-800 rounded-md p-12 hover:shadow-lg transition-shadow duration-300"
    :data-aos="efectoAleatorio"
  >
    <img src="/img/ponente1.png" alt="" />
    <div class="informacion space-y-2 mt-6">
      <h3 class="nombre font-black text-2xl">Nombre Speaker</h3>
      <p class="ubicacion text-slate-700 text-xl">Ubicación</p>
      <ul class="redes_sociales flex gap-8 mt-4">
        <li>
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
        </li>
      </ul>
      <div class="listado_skills flex gap-2 mt-6 flex-wrap">
        <span class="skill">HTML5</span>
        <span class="skill">CSS3</span>
        <span class="skill">JavaScript</span>
          <span class="skill">CSS3</span>
        <span class="skill">JavaScript</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.caja:nth-child(odd) {
  background-image: url('/img/bg_1.png');
  background-position: center top;
  background-size: 350px;
  background-repeat: no-repeat;
}
.caja:nth-child(even) {
  background-image: url('/img/bg_2.png');
  background-position: center top;
  background-size: 350px;
  background-repeat: no-repeat;
}
.redes_sociales i {
  color: #162556;
  font-size: 2rem;
  display: inline-block;
  font-style: normal;
}
.listado_skills .skill {
  background-color: #162556;
  padding: .5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: #ffffff;
  font-weight: 700;
}
</style>
