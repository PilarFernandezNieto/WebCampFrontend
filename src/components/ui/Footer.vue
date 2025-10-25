<script setup>
const fecha = new Date()
const anioActual = fecha.getFullYear()
</script>
<template>
  <footer class="bg-blue-950 grid grid-cols-1 items-center mt-20 font-bold text-2xl">
    <div class="contenedor w-[90%]">
      <div class="md:grid md:grid-cols-2 items-center">
  
        <div class="text-center md:text-left py-10">
          <p class="cocobiker text-6xl">DevWebCamp</p>
          <p>Formación</p>
          <p class="text-base mt-4">&copy; Todos los derechos reservados {{ anioActual }}</p>
        </div>
        <ul class="flex  justify-center md:justify-end gap-6">
          <li>
            <a href="/">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </li>

          <li>
            <a href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  min-height: 25rem;
  color: #fff;
}
footer li a i {
  font-size: 2.5rem;
  transition: color 0.3s ease-in-out;
}
footer li a i:hover {
  color: #fbbf24;
}
</style>
