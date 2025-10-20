<script setup></script>
<template>
  <div class="caja border border-blue-800 rounded-md p-12 hover:shadow-lg transition-shadow duration-300">
    <img src="../assets/img/2a41a781d8ae8f0f7a1969c766276b08.png" alt="" />
    <div class="informacion">
      <h3 class="nombre font-black text-4xl my-8">Nombre Speaker</h3>
      <p class="ubicacion text-slate-700 my-4 text-3xl">Ubicación</p>
      <ul class="redes_sociales flex gap-8 mt-4">
        <li>
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
        </li>
      </ul>
      <div class="listado_skills flex gap-5 mt-6">
        <span class="skill">HTML5</span>
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
  color: #1a1b15;
  font-size: 3rem;
  display: inline-block;
  font-style: normal;
}
.listado_skills .skill {
  background-color: #162556;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 700;
}
</style>
